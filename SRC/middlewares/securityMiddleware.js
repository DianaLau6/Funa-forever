const { verificarInactividad } = require('../controllers/authController');
const { validarEntradaUsuario } = require('../model/usermodel');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');


app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100 
});

app.use(limiter);

app.use(validarEntradaUsuario);
app.use(verificarInactividad);