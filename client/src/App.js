import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login';
import HomePage from './pages/Home';
import Clientinicio  from './pages/Client';
import AdminGestionUser from './pages/Admin/AdminGestionUser';
import AdminGestionCursos from './pages/Admin/AdminGestionCursos';
//import Dashboard from './pages/Dashboard/Dashboard';
//import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública para la página principal */}
        <Route path="/" element={<HomePage />} />
        {/* Ruta pública para login */}
        <Route path="/login" element={<Login />} />

         {/* Ruta pública para la página principal */}
         <Route path="/Cliente-inicio" element={<Clientinicio
          />} />

        <Route path="/Admin/Gestion-Usuario" element={<AdminGestionUser/>} />
        <Route path='/Admin/Gestion-cursos' element={< AdminGestionCursos/>}/>

        
    
    
        {/* Puedes agregar más rutas aquí */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;