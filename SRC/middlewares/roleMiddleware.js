const autorizarRol = (rolesPermitidos) => {
    return (req, res, next) => {
        if (!rolesPermitidos.includes(req.user.rol)) {
            return res.status(403).json({ message: 'No tienes permiso para acceder a esta ruta' });
        }
        next();
    };
};

module.exports = autorizarRol;
