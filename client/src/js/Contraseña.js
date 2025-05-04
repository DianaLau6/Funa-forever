document.getElementById('changePasswordForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const passwordActual = document.getElementById('passwordActual').value;
    const nuevaPassword = document.getElementById('nuevaPassword').value;
    const confirmarPassword = document.getElementById('confirmarPassword').value;

    if (nuevaPassword !== confirmarPassword) {
        alert('Las contraseñas nuevas no coinciden.');
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:3000/api/password/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // Token JWT del usuario
            },
            body: JSON.stringify({ passwordActual, nuevaPassword }),
        });

        if (response.ok) {
            alert('Contraseña actualizada exitosamente.');
            window.location.href = '/home.html'; // Redirigir a la página principal
        } else {
            const data = await response.json();
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error al actualizar la contraseña:', error);
        alert('Hubo un problema con el servidor.');
    }
});