const device = require('device'); // Paquete npm para detectar dispositivos

module.exports = (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const userDevice = device(req.headers['user-agent']).type;
    req.context = {
        ip,
        dispositivo: userDevice
    };

    next();
};