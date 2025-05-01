const express = require('express'); 
const router = express.Router(); 

router.get('/usuarios', (req, res) => {
    res.status(200).json({ message: 'Lista de usuarios' });
});

module.exports = router; 
