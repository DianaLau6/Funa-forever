const { registrarError } = require('../services/errorService');

const errorHandler = (err, req, res, next) => {
    registrarError({
        mensaje: err.message,
        stack: err.stack,
        ruta: req.originalUrl
    });
    
    res.status(500).json({
        success: false,
        message: process.env.NODE_ENV === 'development' ? err.message : 'Error interno'
    });
};

module.exports = errorHandler;