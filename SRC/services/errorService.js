const { poolPromise, sql } = require('../config/dbConfig');

const registrarError = async (errorData) => {
    const { id_usuario, ruta, metodo, mensaje, stack } = errorData;
    try {
        const pool = await poolPromise;
        const request = pool.request();
        request.input('id_usuario', sql.Int, id_usuario);
        request.input('ruta', sql.NVarChar(255), ruta);
        request.input('metodo', sql.NVarChar(10), metodo);
        request.input('mensaje', sql.NVarChar(sql.MAX), mensaje);
        request.input('stack', sql.NVarChar(sql.MAX), stack);

        await request.query(`
            INSERT INTO Log_Errors 
                (id_usuario, ruta, metodo, mensaje_error, stack_trace, fecha_hora)
            VALUES 
                (@id_usuario, @ruta, @metodo, @mensaje, @stack, GETDATE())
        `);
    } catch (err) {
        console.error('Error al registrar el error:', err);
    }
};

module.exports = { registrarError };