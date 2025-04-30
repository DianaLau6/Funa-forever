const express = require('express');
const path = require('path');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const passwordRoutes = require('./routes/Passwordroutes');
const { autenticarUsuario } = require('./middlewares/authMiddleware');

const app = express();

// Middleware para manejar JSON
app.use(express.json());

// Habilitar CORS para todas las rutas
app.use(cors());
app.options('*', cors());

// Usar rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/password', autenticarUsuario, passwordRoutes); // Protegido

// Ruta protegida directa
app.get('/api/usuario/perfil', autenticarUsuario, (req, res) => {
    res.json({ message: 'Bienvenido a tu perfil', usuario: req.user });
});

// Servir vistas estáticas
app.use(express.static(path.join(__dirname, 'views')));

// Ruta para el login (página HTML)
app.get('/login', (_req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/dashboard', (_req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Dashbord.html'));
});

module.exports = app;