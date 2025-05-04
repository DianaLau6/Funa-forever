import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const response = await fetch('/api/auth/verify', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setIsValid(response.ok);
      } catch (error) {
        setIsValid(false);
      }
    };
    verifyToken();
  }, [location]);

  if (isValid === null) return <div>Loading...</div>;
  return isValid ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;