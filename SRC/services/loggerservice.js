const { v4: uuidv4 } = require('uuid');
const { poolPromise, sql } = require('../config/dbConfig');

const registrarLogin = async (id_usuario, ip, dispositivo, estado) => {
    try {
        const pool = await poolPromise;
        const request = pool.request();

        // Generar valores
        const session_id = uuidv4();
        const fecha_login = new Date();
        const last_activity = new Date();

        // Configurar todos los parámetros ANTES de ejecutar la consulta
        request.input('id_usuario', sql.Int, id_usuario);
        request.input('session_id', sql.NVarChar(36), session_id);
        request.input('ip_origen', sql.NVarChar(200), ip);
        request.input('dispositivo', sql.NVarChar(200), dispositivo.substring(0, 200));
        request.input('fecha_login', sql.DateTime, fecha_login);
        request.input('last_activity', sql.DateTime, last_activity);
        request.input('estado', sql.NVarChar(40), estado);

        // Consulta SQL completa con todas las columnas
        await request.query(`
            INSERT INTO Log_sesiones (
                id_usuario, 
                session_id, 
                ip_origen, 
                dispositivo, 
                fecha_login, 
                last_activity, 
                estado
            ) VALUES (
                @id_usuario, 
                @session_id, 
                @ip_origen, 
                @dispositivo, 
                @fecha_login, 
                @last_activity, 
                @estado
            )
        `);

        console.log('✅ Log de inicio registrado');
    } catch (error) {
        console.error('❌ Error al registrar inicio:', error);
        throw error;
    }
};

const registrarLogout = async (session_id) => {
    try {
        const pool = await poolPromise;
        const request = pool.request();
        request.input('session_id', sql.NVarChar(36), session_id);
        
        await request.query(`
            UPDATE Log_sesiones 
            SET fecha_logout = GETDATE()
            WHERE session_id = @session_id
        `);
    } catch (error) {
        console.error('Error en registrarLogout:', error);
    }
};

module.exports = { registrarLogin, registrarLogout };