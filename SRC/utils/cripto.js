const crypto = require('crypto');
const clave = process.env.AES_KEY; 

const cifrar = (texto) => {
    const iv = crypto.randomBytes(16);
    const cifrador = crypto.createCipheriv('aes-256-cbc', Buffer.from(clave), iv);
    let cifrado = cifrador.update(texto, 'utf8', 'hex');
    cifrado += cifrador.final('hex');
    return iv.toString('hex') + ':' + cifrado;
};

const descifrar = (textoCifrado) => {
    const [ivHex, texto] = textoCifrado.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const descifrador = crypto.createDecipheriv('aes-256-cbc', Buffer.from(clave), iv);
    let descifrado = descifrador.update(texto, 'hex', 'utf8');
    descifrado += descifrador.final('utf8');
    return descifrado;
};

module.export = {cifrar, descifrar};