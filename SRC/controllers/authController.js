const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connectDB = require('../config/dbConfig');

const limiteIntentos = 5;
const tiempoBloqueo = 15 * 60 * 1000; 

const login = async (req, res) => {
    const { correo, contraseña } = req.body;

    try {
        const pool = await connectDB();
        
        // Obtener usuario con campos relevantes
        const result = await pool.request()
            .input('correo', correo)
            .query('SELECT id_usuario, contraseña, rol, intentosFallidos, bloqueadoHasta, Cambiocontraseña FROM Usuarios WHERE correo = @correo');

        const user = result.recordset[0];

        if (!user) {
            return res.status(404).json({ message: 'Correo o contraseña inválidos' });
        }

        // Verificar bloqueo existente
        if (user.bloqueadoHasta && new Date(user.bloqueadoHasta) > new Date()) {
            const tiempoRestante = Math.ceil((new Date(user.bloqueadoHasta) - Date.now()) / 60000);
            return res.status(403).json({ 
                message: `Cuenta bloqueada. Inténtalo nuevamente en ${tiempoRestante} minutos.`,
                desbloqueo: user.bloqueadoHasta.toISOString()
            });
        }

        // Verificar contraseña insegura
        if (user.Cambiocontraseña) {
            return res.status(403).json({ message: 'Debes actualizar tu contraseña para continuar' });
        }

        // Validar contraseña
        const validPassword = await bcrypt.compare(contraseña, user.contraseña);
        if (!validPassword) {
            // Actualización atómica con bloqueo condicional
            await pool.request()
                .input('correo', correo)
                .query(`
                    UPDATE Usuarios 
                    SET 
                        intentosFallidos = COALESCE(intentosFallidos, 0) + 1,
                        bloqueadoHasta = CASE 
                            WHEN (COALESCE(intentosFallidos, 0) + 1) >= ${limiteIntentos} 
                            THEN DATEADD(MINUTE, ${tiempoBloqueo/60000}, GETDATE())
                            ELSE bloqueadoHasta 
                        END
                    WHERE correo = @correo
                `);

            // Obtener valores actualizados
            const updatedResult = await pool.request()
                .input('correo', correo)
                .query('SELECT intentosFallidos, bloqueadoHasta FROM Usuarios WHERE correo = @correo');
            
            const updatedUser = updatedResult.recordset[0];
            const intentosActuales = updatedUser.intentosFallidos;
            const bloqueadoHasta = updatedUser.bloqueadoHasta;

            // Manejar bloqueo
            if (bloqueadoHasta) {
                const tiempoRestante = Math.ceil((new Date(bloqueadoHasta) - Date.now()) / 6000000);
                return res.status(403).json({
                    message: `Cuenta bloqueada. Intenta de nuevo en ${tiempoRestante} minutos.`,
                    desbloqueo: bloqueadoHasta.toISOString()
                });
            }

            return res.status(401).json({
                message: `Correo o contraseña inválidos. Intentos restantes: ${limiteIntentos - intentosActuales}`
            });
        }

        // Resetear intentos en éxito
        await pool.request()
            .input('correo', correo)
            .query('UPDATE Usuarios SET intentosFallidos = 0 WHERE correo = @correo');

        // Generar JWT
        const token = jwt.sign(
            { id_usuario: user.id_usuario, rol: user.rol },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ 
            token, 
            rol: user.rol,
            message: 'Autenticación exitosa' 
        });

    } catch (error) {
        console.error('Error en login:', {
            message: error.message,
            stack: error.stack,
            sqlError: error.originalError?.info?.message
        });
        res.status(500).json({ 
            message: 'Error interno del servidor',
            error: process.env.NODE_ENV === 'development' ? error.message : null
        });
    }
};

module.exports = { login };