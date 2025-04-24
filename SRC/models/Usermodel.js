const connectDB = require('../config/dbConfig');

const findUserByEmail = async (correo) => {
    const pool = await connectDB();
    const result = await pool.request()
        .input('correo', correo)
        .query('SELECT * FROM Usuarios WHERE correo = @correo');
    return result.recordset[0];
};

const updateUserIntentos = async (correo, intentosFallidos) => {
    const pool = await connectDB();
    await pool.request()
        .input('correo', correo)
        .input('intentosfallidos', intentosFallidos)
        .query('UPDATE Usuarios SET intentosfallidos = @intentosfallidos WHERE correo = @correo');
};

const resetIntentosFallidos = async (correo) => {
    const pool = await connectDB();
    await pool.request()
        .input('correo', correo)
        .query('UPDATE Usuarios SET intentosfallidos = 0 WHERE correo = @correo');
};

const blockUser = async (correo, bloqueadoHasta) => {
    const pool = await connectDB();
    await pool.request()
        .input('correo', correo)
        .input('bloqueadoHasta', bloqueadoHasta)
        .query('UPDATE Usuarios SET bloqueadoHasta = @bloqueadoHasta WHERE correo = @correo');
};

module.exports = { findUserByEmail, updateUserIntentos, resetIntentosFallidos, blockUser };