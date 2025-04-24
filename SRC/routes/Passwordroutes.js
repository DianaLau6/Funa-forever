const express = require('express');
const router = express.Router();

const { cambiarContraseña } = require('../controllers/passwordcontroller');
router.post('/update', cambiarContraseña);

module.exports = router;
