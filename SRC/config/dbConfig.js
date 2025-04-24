const sql = require('mssql');
require('dotenv').config();

// Configuración de conexión usando las variables de entorno
const dbConfig = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
        encrypt: process.env.DB_ENCRYPT === 'true',
        trustServerCertificate: process.env.DB_TRUST_CERTIFICATE === 'true',
    },
};

const connectDB = async () => {
    try {
        const pool = await sql.connect(dbConfig);
        console.log('Conexión a SQL Server exitosa');
        return pool;
    } catch (error) {
        console.error('Error al conectar a SQL Server:', error);
        throw error;
    }
};

// Exportamos la función para que pueda ser utilizada en otros archivos
module.exports = connectDB;