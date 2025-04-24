document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    // Verificar si el token existe
    const token = localStorage.getItem('token');

    if (!token) {
        alert('No tienes acceso. Redirigiendo al login...');
        window.location.href = '/login.html'; // Redirige al usuario al login si no tiene token
    }


    try {
        const response = await fetch('http://127.0.0.1:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ correo, contraseña }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token); // Guarda el token para futuras solicitudes

            // Redirección basada en el rol
            switch (data.rol) {
                case 1: // Administrador principal
                    window.location.href = './Dashbord.html';
                    break;
                case 2: // Cliente
                    window.location.href = './home.html';
                    break;
                case 3: // Soporte al cliente
                    window.location.href = '/soporte-home.html';
                    break;
                case 4: // Gestor de inventario
                    window.location.href = '/inventario.html';
                    break;
                case 5: // Contador
                    window.location.href = '/contabilidad.html';
                    break;
                case 6: // Marketing
                    window.location.href = '/marketing.html';
                    break;
                default:
                    alert('Rol no reconocido');
                    break;
            }
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Hubo un problema con el servidor.');
    }
});
