const { poolPromise, sql } = require('../config/dbConfig'); // Importa sql y poolPromise

const getUserByEmailWithRole = async (correo) => {
    try {
        const pool = await poolPromise; // Usa el pool directamente
        const request = pool.request();

        // Define el tipo de dato del parámetro (NVARCHAR para correo)
        request.input('correo', sql.NVarChar(100), correo);

        const result = await request.query(`
            SELECT 
                u.id_usuario, 
                u.contraseña, 
                u.intentos_fallidos,
                u.bloqueado_hasta,
                r.nombre_rol AS rol 
            FROM 
                usuarios u 
            JOIN 
                usuario_roles ur ON u.id_usuario = ur.id_usuario 
            JOIN 
                roles r ON ur.id_rol = r.id_rol 
            WHERE 
                u.correo = @correo
        `);
        console.log('Resultado de la consulta:', result.recordset[0]);
        return result.recordset[0] || null; 
        

    } catch (error) {
        console.error('Error en getUserByEmailWithRole:', error);
        throw error;
    }
};

module.exports = { getUserByEmailWithRole };