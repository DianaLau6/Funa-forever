import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/styless.css'; 

const Login = () => {
  const [formData, setFormData] = useState({
    correo: '',
    contraseña: '',
    rememberMe: false
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo: formData.correo,
          contraseña: formData.contraseña
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error de autenticación');
      }

      // Almacenamiento del token
      const storage = formData.rememberMe ? localStorage : sessionStorage;
      storage.setItem('token', data.token);

      // Redirección basada en rol
      if (data.pantalla) {
        navigate(data.pantalla); // Usar react-router para navegación
      } else {
        setError('No se encontró pantalla para este rol');
      }

    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'Error en el servidor');
    }
  };

  return (
    <div className="container-login">
      <div className="Login-container">
        <div className="login-box">
          <h2>Inicia sesión</h2>
          <p className="subtitle">Para tus datos y regresar a ver tus compras</p>

          <div className="login-options">
            <div className="option-section">
              <h3>Email corporativo</h3>
              <ul className="role-list">
                <li>Personal</li>
                <li>Segura persona</li>
                <li>Suministro de piezas</li>
                <li>Lugar ✔</li>
              </ul>
            </div>

            <div className="social-login">
              <button className="google-btn">
                <img src="" alt="Google" />  
                Sign in with Google
              </button>
              <button className="apple-btn">
                <img src="" alt="Apple" />
                Sign in with Apple
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="correo">Email address</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="Correo electrónico"
              value={formData.correo}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="contraseña">Password</label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              placeholder="Contraseña"
              value={formData.contraseña}
              onChange={handleInputChange}
              required
            />

            <div className="options">
              <div className="remember">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <label htmlFor="rememberMe">Recuérdame 14 días</label>
              </div>
              <a href="/forgot-password">Forgot password?</a>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="login-btn">Login</button>

            <p className="signup-text">
              Sport home as necessary!{' '}
              <a href="/signup" className="signup-link">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
      <div className="Imagen-container">
        
      </div>
    </div>
  );
};

export default Login;