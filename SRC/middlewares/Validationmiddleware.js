const Joi = require('joi');

const validarRegistro = (req, res, next) => {
    const schema = Joi.object({
        correo: Joi.string().email().required(),
        contraseña: Joi.string().min(8).regex(/[A-Z]/).required(),
        rol: Joi.string().valid('Cliente', 'Administrador').required()
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = {validarRegistro};