const { poolPromise, sql } = require('../config/dbConfig');

// Consulta segura con parámetros
const getUserByEmailWithRole = async (correo) => {
    try {
        const pool = await poolPromise;
        const request = pool.request();
        request.input('correo', sql.NVarChar(100), correo);

        const result = await request.query(`
            SELECT 
                u.id_usuario, 
                u.contraseña, 
                r.nombre_rol AS rol 
            FROM usuarios u
            JOIN usuario_roles ur ON u.id_usuario = ur.id_usuario
            JOIN roles r ON ur.id_rol = r.id_rol
            WHERE u.correo = @correo
        `);
        return result.recordset[0] || null;
    } catch (error) {
        throw error;
    }
};

// Validación de entrada con Joi (middleware)
const validarEntradaUsuario = (req, res, next) => {
    const schema = Joi.object({
        correo: Joi.string().email().required(),
        contraseña: Joi.string().min(4).pattern().required()
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = { getUserByEmailWithRole, validarEntradaUsuario };