const bcrypt = require('bcrypt');
const connectDB = require('../config/dbConfig');

const validarContraseña = (contraseña) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(contraseña);
};

const cambiarContraseña = async (req, res) => {
    const { correo, nuevaContraseña } = req.body;

    try {
        // Validar que la nueva contraseña es robusta
        if (!validarContraseña(nuevaContraseña)) {
            return res.status(400).json({
                message: 'La nueva contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y un carácter especial.',
            });
        }

        // Encriptar la nueva contraseña
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(nuevaContraseña, saltRounds);

        const pool = await connectDB();
        await pool.request()
            .input('correo', correo)
            .input('contraseña', hashedPassword)
            .input('Cambiocontraseña', 0) // Marcar que ya no necesita cambio obligatorio
            .query(`
                UPDATE Usuarios 
                SET contraseña = @contraseña, Cambiocontraseña = @Cambiocontraseña 
                WHERE correo = @correo
            `);

        res.status(200).json({ message: 'Contraseña actualizada exitosamente' });
    } catch (error) {
        console.error('Error al cambiar contraseña:', error);
        res.status(500).json({ message: 'Error interno del servidor', error });
    }
};

module.exports = { cambiarContraseña };
