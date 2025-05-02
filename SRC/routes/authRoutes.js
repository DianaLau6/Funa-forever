const express = require('express');
const router = express.Router();
const { login, logout} = require('../controllers/authController');
const { loginValidation, autenticarUsuario } = require('../middlewares/authMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController');
const loggerMiddleware = require('../middlewares/loggermiddlaware');


// Rutas
router.post('/login', loginValidation, login,);
router.post('/login', loggerMiddleware, authController.login);
router.get('/perfil', autenticarUsuario, (req, res) => {
    res.json({ message: `Bienvenido, usuario ${req.user.id_usuario}` });
});

router.post('/logout', logout); 
module.exports = router; 