const bcrypt = require('bcrypt');
const connectDB = require('../config/dbConfig');


const registrarUsuario = async (req, res) => {
    const { correo, contraseña } = req.body;

    try {
        
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(contraseña, saltRounds);

        const pool = await connectDB();
        await pool.request()
            .input('correo', correo)
            .input('contraseña', hashedPassword)
            .query('INSERT INTO Usuarios (correo, contraseña) VALUES (@correo, @contraseña)');

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ message: 'Error del servidor', error });
    }
};

module.exports = { registrarUsuario };
