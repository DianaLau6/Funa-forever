// services/loggerService.js
const { LogInicioSesion } = require('../models'); // Sequelize model

const logInicioSesion = async (id_usuario, estado, req) => {
    try {
        await LogInicioSesion.create({
            id_usuario,
            ip_origen: req.context.ip,
            dispositivo: req.context.dispositivo,
            estado
        });
    } catch (error) {
        console.error('Error al registrar el log de inicio de sesión:', error);
    }
};

module.exports = { logInicioSesion };