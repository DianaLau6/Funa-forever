const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const {validateLogin } = require('../services/userservice')
const { loginValidation, autenticarUsuario } = require('../middlewares/authMiddleware');

// Rutas
router.post('/login', loginValidation, login);
router.get('/perfil', autenticarUsuario, (req, res) => {
    res.json({ message: `Bienvenido, usuario ${req.user.id_usuario}` });
});

module.exports = router; 