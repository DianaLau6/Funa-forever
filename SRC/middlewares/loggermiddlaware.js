const device = require('express-device');

module.exports = (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'] || '';
    const userDevice = device.capture ? device.capture(req).type : 'desconocido';

    req.context = {
        ip,
        dispositivo: userDevice || userAgent 
    };

    next();
};
