const express = require('express'); 
const router = express.Router(); 

// Ejemplo de una ruta
router.get('/usuarios', (req, res) => {
    res.status(200).json({ message: 'Lista de usuarios' });
});

module.exports = router; 
