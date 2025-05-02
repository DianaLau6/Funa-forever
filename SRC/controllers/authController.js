const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const { getUserByEmailWithRole } = require('../model/usermodel');
const { registrarLogin } = require('../services/loggerservice');

const generarToken = (user) => {
    return jwt.sign(
        {
            id: user.id_usuario, 
            rol: user.rol 
        },
        process.env.JWT_SECRET, 
        { expiresIn: '1h' } 
    );
};

const login = async (req, res) => {
    const { correo, contraseña } = req.body;
    console.log('Datos recibidos:', { correo, contraseña }); // 👈 Log de entrada

    try {
        const user = await getUserByEmailWithRole(correo);
        console.log('Usuario encontrado:', user); // 👈 Log del usuario

        if (!user) {
            console.log('Usuario no existe');
            await registrarLogin(null, req.ip, req.headers['user-agent'], 'Fallido');
            return res.status(401).json({ message: 'Correo no registrado' });
        }

        // Compara la contraseña
        const contraseñaValida = await bcrypt.compare(contraseña, user.contraseña);
        console.log('¿Contraseña válida?', contraseñaValida); // 👈 Log del resultado

        if (!contraseñaValida) {
            console.log('Contraseña incorrecta');
            await registrarLogin(null, req.ip, req.headers['user-agent'], 'Fallido');
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
      
        const token = generarToken(user);
        const pantalla = getPantallaPorRol(user.rol); 

        await registrarLogin(user.id_usuario, req.ip, req.headers['user-agent'], 'Exitoso');
        
        res.status(200).json({ 
            token,
            rol: user.rol,
            pantalla,
            message: 'Autenticación exitosa' 
        });

    } catch (error) {
        console.error('Error completo en login:', error); // 👈 Log detallado
        res.status(500).json({ message: 'Error interno' });
    }
};

// Logout (requiere autenticación)
const logout = async (req, res) => {
    const userId = req.user.id; 
    try {
        await registrarLogout(userId);
        res.status(200).json({ message: 'Sesión cerrada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al cerrar sesión' });
    }
};

const getPantallaPorRol = (rol) => {
    switch (rol) { // <-- ¡No uses toUpperCase()!
        case 'Administrador':
            return '/dashboard';
        case 'Cliente':
            return '/dashboard/cliente';
        case 'Instructores':
            return '/dashboard/instructores';
        case 'Marketing':
            return '/dashboard/marketing';
        case 'Soporte':
            return '/dashboard/soporte';
        case 'Reseñas-comentarios':
            return '/dashboard/reseñas';
        default: 
            throw new Error(`Rol '${rol}' no tiene pantalla asignada`);
    }
};
module.exports = { login, getPantallaPorRol, logout };
