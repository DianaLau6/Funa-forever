const { verificarInactividad } = require('../controllers/authController');
const { validarEntradaUsuario } = require('../model/usermodel');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');



const xss = require('xss');

// Middleware para sanitizar salidas
const sanitizarSalida = (req, res, next) => {
    const originalSend = res.send;
    res.send = function (data) {
        if (typeof data === 'string') data = xss(data); // Escapa caracteres peligrosos
        originalSend.call(this, data);
    };
    next();
};

app.use(sanitizarSalida);
app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100 
});

app.use(limiter);

app.use(validarEntradaUsuario);
app.use(verificarInactividad);