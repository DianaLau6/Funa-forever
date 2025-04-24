const express = require('express');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const passwordRoutes = require('./routes/Passwordroutes');
const autenticarUsuario = require('./middlewares/authMiddleware');
const app = express();
const cors = require('cors');

// Permitir solicitudes desde cualquier origen
app.use(cors());
app.options('*', cors()); // Habilitar CORS para todas las rutas y métodos


// Middleware para procesar JSON
app.use(express.json());

// Usar las rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/login', authRoutes);
app.use('/api/password', passwordRoutes);
app.use('/api/password', autenticarUsuario, passwordRoutes); // Proteger la ruta con el middleware



app.get('/api/usuario/perfil', autenticarUsuario, (req, res) => {
    res.json({ message: 'Bienvenido a tu perfil', usuario: req.user });
});

// Servir vistas estáticas
app.use(express.static(path.join(__dirname, 'views')));

// Ruta para el login
app.get('/login', (_req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

module.exports = app;