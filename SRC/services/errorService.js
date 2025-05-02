const { poolPromise, sql } = require('../config/dbConfig');

const registrarError = async (errorData) => {
    const {
        id_usuario = null,
        ruta,
        metodo,
        mensaje_error,
        stack_trace
    } = errorData;

    try {
        const pool = await poolPromise;
        const request = pool.request();

        // Define parámetros con tipos explícitos
        request.input('id_usuario', sql.Int, id_usuario);
        request.input('ruta', sql.NVarChar(255), ruta);
        request.input('metodo', sql.NVarChar(10), metodo);
        request.input('mensaje_error', sql.NVarChar(sql.MAX), mensaje_error);
        request.input('stack_trace', sql.NVarChar(sql.MAX), stack_trace);

        await request.query(`
            INSERT INTO Log_Errors 
                (id_usuario, fecha_hora, ruta, metodo, mensaje_error, stack_trace)
            VALUES 
                (@id_usuario, GETDATE(), @ruta, @metodo, @mensaje_error, @stack_trace)
        `);

        console.log('Error registrado en la base de datos');
    } catch (err) {
        console.error('Error al registrar el error:', err.message);
    }
};

module.exports = { registrarError };