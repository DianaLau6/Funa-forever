const sql = require('mssql');
require('dotenv').config();

const dbConfig = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
        encrypt: process.env.DB_ENCRYPT === 'true',
        trustServerCertificate: process.env.DB_TRUST_CERTIFICATE === 'true',
        enableArithAbort: true // Evita warnings comunes
    },
    pool: {
        max: 10, // Máximo de conexiones
        min: 0,
        idleTimeoutMillis: 30000
    }
};

// Crea y exporta el pool directamente
const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
        console.log('Conexión a SQL Server exitosa');
        return pool;
    })
    .catch(error => {
        console.error('Error al conectar:', error);
        throw error;
    });

module.exports = { poolPromise, sql };