import React from 'react';
import SidebarAdmin from '../../components/Admin/SidebarAdmin';
import '../../css/App.css';
import HeaderBar from '../../components/Admin/Instructores/HeaderBar';
import InstructorGrid from '../../components/Admin/Instructores/InstructorGrid';

function AdminGestionInstructores() {
  return (
    <div className="app-container">
      <SidebarAdmin />
      <div className='container'>
       <HeaderBar title="Instructores" />
        <InstructorGrid />
      </div>

    </div>
  );
}

  export default  AdminGestionInstructores;