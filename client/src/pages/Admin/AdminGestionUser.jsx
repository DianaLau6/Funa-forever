import React from 'react';
import SidebarAdmin from '../../components/Admin/SidebarAdmin';
import ActivitySection from '../../components/Admin/GestionUser/ActivitySection';
import '../../css/App.css';
import TaskSection from '../../components/Admin/GestionUser/TaskSection';

//import AdminPanel from '../../components/Admin/AdminPanel';


const AdminGestionUser = () => (
    <div className="app-container">
      <SidebarAdmin />
      <div className="container">
        <ActivitySection />
        <TaskSection />

      </div>
      {}
    </div>
  );

  export default AdminGestionUser;