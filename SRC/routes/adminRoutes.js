const express = require('express');
const { obtenerDashboard } = require('../controllers/adminController');
const autenticarUsuario = require('../middlewares/authMiddleware');
const autorizarRol = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/dashboard', autenticarUsuario, autorizarRol(['admin']), obtenerDashboard);

module.exports = router;