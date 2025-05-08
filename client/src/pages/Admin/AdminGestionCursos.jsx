import React from 'react';
import SidebarAdmin from '../../components/Admin/SidebarAdmin';
import CursosHeader from '../../components/Admin/Cursos/CursosHeader';
import '../../css/App.css';
import CursosTable from '../../components/Admin/Cursos/CursosTable';


function AdminGestionCursos() {
  return (
    <div className="app-container">
      <SidebarAdmin />
      <div className='container'>
        <CursosHeader />
        <CursosTable />
      </div>

    </div>
  );
}

  export default AdminGestionCursos;