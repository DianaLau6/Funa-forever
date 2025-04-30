const sql = require('mssql');

const config = {
  user: 'Lau',
  password: '12345',
  server: 'DIANA',
  database: 'EDBAY',
  options: {
    encrypt: false, // si es local
    trustServerCertificate: true,
  }
};

sql.connect(config).then(pool => {
  return pool.request().query('SELECT * FROM Usuarios');
}).then(result => {
  console.log('Resultados:', result.recordset);
}).catch(err => {
  console.error('Error en la consulta:', err);
});
