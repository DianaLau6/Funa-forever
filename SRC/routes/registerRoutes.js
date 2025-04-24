const express = require('express');
const { register } = require('../controllers/registerController'); // Importa el controlador del registro
const router = express.Router();

router.post('/register', register); // Ruta del registro

module.exports = router;