const sql = require('mssql');
const connectDB = require('../config/dbConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getUserByEmailWithRole } = require('../model/usermodel');

const validateLogin = async (correo, contraseña) => {
    try {
        const user = await getUserByEmailWithRole(correo);
        if (!user) return null;

        const ahora = new Date();
        if (user.bloqueado_hasta && ahora < new Date(user.bloqueado_hasta)) {
            throw new Error('Usuario bloqueado. Intenta más tarde.');
        }

        const passwordMatch = await bcrypt.compare(contraseña, user.contraseña);
        const pool = await connectDB();

        if (!passwordMatch) {
            const nuevosIntentos = (user.intentos_fallidos || 0) + 1;
            const bloqueadoHasta = nuevosIntentos >= 5
                ? new Date(Date.now() + 60 * 1000).toISOString()
                : null;

            await pool.request()
                .input('correo', sql.VarChar, correo)
                .input('intentos', sql.Int, nuevosIntentos >= 5 ? 0 : nuevosIntentos)
                .input('bloqueado_hasta', sql.DateTime, bloqueadoHasta)
                .query(`
                    UPDATE usuarios
                    SET intentos_fallidos = @intentos,
                        bloqueado_hasta = @bloqueado_hasta
                    WHERE correo = @correo
                `);

            return null;
        }

        await pool.request()
            .input('correo', sql.VarChar, correo)
            .query(`
                UPDATE usuarios
                SET intentos_fallidos = 0,
                    bloqueado_hasta = NULL
                WHERE correo = @correo
            `);

        const token = jwt.sign(
            { id_usuario: user.id_usuario },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return {
            token,
            rol: user.rol
        };
    } catch (error) {
        console.error('Error en validateLogin:', error.message);
        throw error;
    }
};

module.exports = { validateLogin };