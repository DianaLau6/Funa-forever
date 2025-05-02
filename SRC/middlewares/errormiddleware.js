const { registrarError } = require('../services/errorService');

const errorHandler = (err, req, res, next) => {
   
    const errorData = {
        ruta: req.originalUrl,
        metodo: req.method,
        mensaje_error: err.message,
        stack_trace: err.stack,
        id_usuario: req.user?.id
    };
    registrarError(errorData);

   
    res.status(500).json({
        success: false,
        message: "Ocurrió un error interno",
        error: process.env.NODE_ENV === 'development' ? err.message : 'Contacta al soporte'
    });
};

module.exports = errorHandler;