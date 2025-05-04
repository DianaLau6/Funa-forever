// En tu App principal
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login';
//import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
          
          </ProtectedRoute>
        } />
        {/* Otras rutas */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;