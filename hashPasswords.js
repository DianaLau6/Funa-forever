const bcrypt = require('bcryptjs'); // Usamos bcryptjs para el hash
const connectDB = require('./SRC/config/dbConfig'); // La conexión a la base de datos

async function hashPasswords() {
    try {
        // Conectar a la base de datos
        const pool = await connectDB();
        
        // Obtener todos los usuarios con contraseñas en texto plano
        const result = await pool.request().query('SELECT * FROM Usuarios');
        const users = result.recordset;

        // Recorrer todos los usuarios y hashear sus contraseñas
        for (let user of users) {
            if (user.contraseña) {
                // Hashear la contraseña
                const hashedPassword = await bcrypt.hash(user.contraseña, 10);

                // Actualizar la contraseña hasheada en la base de datos
                await pool.request()
                    .input('hashedPassword', hashedPassword)
                    .input('id_usuario', user.id_usuario)
                    .query('UPDATE Usuarios SET contraseña = @hashedPassword WHERE id_usuario = @id_usuario');
                
                console.log(`Contraseña de usuario ${user.id_usuario} hasheada con éxito.`);
            }
        }
        console.log('Todas las contraseñas han sido hasheadas exitosamente.');
    } catch (error) {
        console.error('Error al hashear contraseñas:', error);
    }
}

// Ejecutar la función
hashPasswords();