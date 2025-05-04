require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const passwordRoutes = require('./routes/Passwordroutes');
const { autenticarUsuario } = require('./middlewares/authMiddleware');
const errorHandler = require('./middlewares/errormiddleware');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Origen permitido
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Manejar preflight para todas las rutas
app.options('*', cors());

// Middlewares
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/password', autenticarUsuario, passwordRoutes);

// Ruta protegida
app.get('/api/usuario/perfil', autenticarUsuario, (req, res) => {
  res.json({ message: 'Bienvenido a tu perfil', usuario: req.user });
});

// Servir versión legacy solo en desarrollo
if (process.env.NODE_ENV === 'development') {
  app.use('/legacy', express.static(path.join(__dirname, 'views')));
}

// Configuración para producción (React)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
  });
}

// Manejo de errores
app.use(errorHandler);

module.exports = app;