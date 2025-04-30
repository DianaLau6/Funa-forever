const userService = require('../services/userservice');

const login = async (req, res) => { 
    const { correo, contraseña } = req.body;

    try {
        const user = await userService.validateLogin(correo, contraseña);
        if (!user) {
            return res.status(401).json({ message: 'Correo o contraseña inválidos' });
        }

        const pantalla = getPantallaPorRol(user.rol); 

        res.status(200).json({ 
            token: user.token,
            rol: user.rol,
            pantalla,
            message: 'Autenticación exitosa'
        });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getPantallaPorRol = (rol) => {
    switch (rol.toLowerCase()) {
        case 'administrador':
            return '/dashboard';
        case 'cliente':
            return '/dashboard/cliente';
        case 'instructores':
            return '/dashboard/instructores';
        case 'marketing':
            return '/dashboard/marketing';
        case 'soporte':
            return '/dashboard/soporte';
        case 'reseñas-comentarios':
            return '/dashboard/reseñas';
    }
};

module.exports = { login };
