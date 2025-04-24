const express = require('express');
const { login } = require('../controllers/authController'); // Solo importa login
const router = express.Router();

router.post('/login', login); // Ruta del login

module.exports = router;
