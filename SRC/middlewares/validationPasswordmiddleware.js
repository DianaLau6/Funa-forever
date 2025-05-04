// middleware/validationMiddleware.js
const Joi = require('joi');

// Esquema para registro de usuario
const registroSchema = Joi.object({
    correo: Joi.string().email().required(),
    contraseña: Joi.string()
        .min(8)
        .pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/) // Mínimo 8 caracteres, 1 mayúscula, 1 número, 1 símbolo
        .required(),
    rol: Joi.string().valid('Administrador', 'Cliente', 'Soporte').required()
});

// Middleware para validar registro
const validarRegistro = (req, res, next) => {
    const { error } = registroSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};