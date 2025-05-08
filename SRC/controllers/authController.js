const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getUserByEmailWithRole } = require('../model/usermodel');
const { registrarLogin, registrarLogout } = require('../services/loggerservice');

const generarToken = (user) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET no está definido en .env");
    }
    return jwt.sign({ id: user.id_usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const generarRefreshToken = (user) => {
    if (!process.env.JWT_REFRESH_SECRET) {
        throw new Error("JWT_REFRESH_SECRET no está definido en .env");
    }
    return jwt.sign({ id: user.id_usuario }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
};

// Middleware: Verificar inactividad y renovar token
const verificarInactividad = (req, res, next) => {
    if (req.user && req.user.lastActivity) {
        const inactividad = Date.now() - req.user.lastActivity;
        if (inactividad > 30 * 60 * 1000) { // 30 minutos
            return res.status(401).json({ message: 'Sesión expirada por inactividad' });
        }
    }
    req.user.lastActivity = Date.now();
    next();
};

// Login con registro de session_id
const login = async (req, res) => {
    const { correo, contraseña } = req.body;
    try {
        const user = await getUserByEmailWithRole(correo);
        if (!user || !(await bcrypt.compare(contraseña, user.contraseña))) {
            await registrarLogin(null, req.ip, req.headers['user-agent'], 'Fallido');
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = generarToken(user);
        const refreshToken = generarRefreshToken(user);
        const session_id = require('crypto').randomUUID(); // ID único de sesión

        await registrarLogin(user.id_usuario, req.ip, req.headers['user-agent'], 'Exitoso', session_id);

        res.status(200).json({ 
            token, 
            refreshToken,
            session_id,
            pantalla: getPantallaPorRol(user.rol) 
        });

    } catch (error) {
        console.error('Error completo en login:', error);
        res.status(500).json({ message: 'Error interno' });
    }
};

// Ruta para renovar token usando refreshToken
const refreshToken = async (req, res) => {
    const { refreshToken } = req.body;
    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const user = await getUserById(decoded.id);
        const newToken = generarToken(user);
        res.json({ token: newToken });
    } catch (error) {
        res.status(401).json({ message: 'Refresh token inválido' });
    }
};

// Logout (requiere autenticación)
const logout = async (req, res) => {
    const userId = req.user.id; 
    try {
        await registrarLogout(userId);
        res.status(200).json({ message: 'Sesión cerrada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al cerrar sesión' });
        console.error('Error completo en login:', error);
    }
};

const getPantallaPorRol = (rol) => {
    switch (rol) { 
        case 'Administrador':
            return '/Admin/Gestion-Usuario';
        case 'Cliente':
            return '/Cliente-inicio';
        case 'Instructores':
            return '/dashboard/instructores';
        case 'Marketing':
            return '/dashboard/marketing';
        case 'Soporte':
            return '/dashboard/soporte';
        case 'Reseñas-comentarios':
            return '/dashboard/reseñas';
        default: 
            throw new Error(`Rol '${rol}' no tiene pantalla asignada`);
    }
};
module.exports = { login, refreshToken, verificarInactividad, getPantallaPorRol, logout };
