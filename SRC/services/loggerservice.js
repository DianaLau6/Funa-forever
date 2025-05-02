const { poolPromise, sql } = require('../config/dbConfig');

// Registrar inicio de sesión
const registrarLogin = async (id_usuario, ip, dispositivo, estado) => {
    try {
        const pool = await poolPromise;
        const request = pool.request();

        const query = `
            INSERT INTO Log_sesiones 
                (id_usuario, ip_origen, dispositivo, fecha_login, estado)
            VALUES 
                (@id_usuario, @ip, @dispositivo, @fecha_login, @estado)
        `;

        request.input('id_usuario', sql.Int, id_usuario);
        request.input('ip', sql.NVarChar(200), ip);
        request.input('dispositivo', sql.NVarChar(200), dispositivo.substring(0, 200));
        request.input('fecha_login', sql.DateTime, new Date()); // Fecha actual en formato correcto
        request.input('estado', sql.NVarChar(40), estado);

        await request.query(query);
        console.log('✅ Log de inicio registrado');

    } catch (error) {
        console.error('❌ Error al registrar inicio:', error);
        throw error;
    }
};

// Registrar cierre de sesión
const registrarLogout = async (id_usuario) => {
    try {
        const pool = await poolPromise;
        const request = pool.request();

        const query = `
            UPDATE Log_sesiones 
            SET fecha_logout = @fecha_logout
            WHERE id_log = (
                SELECT TOP 1 id_log 
                FROM Log_sesiones 
                WHERE id_usuario = @id_usuario 
                AND fecha_logout IS NULL 
                ORDER BY fecha_login DESC
            )
        `;

        request.input('id_usuario', sql.Int, id_usuario);
        request.input('fecha_logout', sql.DateTime, new Date());

        await request.query(query);
        console.log('✅ Log de cierre registrado');

    } catch (error) {
        console.error('❌ Error al registrar cierre:', error);
        throw error;
    }
};

module.exports = { registrarLogin, registrarLogout };