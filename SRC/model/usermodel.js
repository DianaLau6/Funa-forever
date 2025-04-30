const connectDB = require('../config/dbConfig');

const getUserByEmailWithRole = async (correo) => {
    const pool = await connectDB();
    const result = await pool.request()
        .input('correo', correo)
        .query(`
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
    return result.recordset[0];
};

module.exports = { getUserByEmailWithRole };
