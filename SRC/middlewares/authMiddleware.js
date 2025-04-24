const jwt = require('jsonwebtoken');

const autenticarUsuario = (req, res, next) => {
    const token = req.header('Authorization'); // El token se pasa en el encabezado Authorization
    if (!token) {
        return res.status(401).json({ message: 'No tienes acceso. Inicia sesión.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'mi_secreto');
        req.user = decoded; // Agregar la información del usuario decodificada al objeto `req`
        next(); // Continuar al controlador
    } catch (error) {
        res.status(400).json({ message: 'Token inválido.' });
    }
};

module.exports = autenticarUsuario;
