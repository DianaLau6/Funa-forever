document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;

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

            // Guarda el token en localStorage
            localStorage.setItem('token', data.token);

            // Redirige a la pantalla según el rol
            if (data.pantalla) {
                window.location.href = data.pantalla;
            } else {
                alert('No se encontró una pantalla correspondiente para este rol.');
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