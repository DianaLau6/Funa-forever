const jwt = require('jsonwebtoken');
const Joi = require('joi');

const autenticarUsuario = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'No tienes acceso. Inicia sesión.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'mi_secreto');
        req.user = decoded;
        next(); 
    } catch (error) {
        res.status(400).json({ message: 'Token inválido o expirado.' });
    }
};


const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        correo: Joi.string().email().required(),
        contraseña: Joi.string().min(4).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'Datos inválidos', details: error.details });
    }
    next();
};

const authorizeRoles = (...rolesPermitidos) => {
    return (req, res, next) => {
        const rolUsuario = req.user.rol; 
        if (!rolesPermitidos.includes(rolUsuario)) {
            return res.status(403).json({ message: 'Acceso denegado: rol no autorizado' });
        }
        next();
    };
};


module.exports = {loginValidation, autenticarUsuario, authorizeRoles};
