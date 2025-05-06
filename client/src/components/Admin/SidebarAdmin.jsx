import React from 'react';
import { Link } from 'react-router-dom';

import styles from './css/SidebarAdmin.module.css';
import avatar from '../../assets/Perfil.jpg'; // Asegúrate de tener esta imagen

const SidebarAdmin = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.userSection}>
        <div className={styles.avatarContainer}>
          <img src={avatar} alt="Samantha" className={styles.avatar} />
          <span className={styles.notificationDot}></span>
        </div>
        <h3 className={styles.name}>Samantha</h3>
        <p className={styles.email}>samantha@email.com</p>
      </div>

      <nav className={styles.navMenu}>
        <Link to="/Gestion-usuarios" >Gestión de Usuarios</Link>
        <Link to="/Gestion-cursos">Cursos</Link>
        <Link to="/Gestion-instructores">Instructores</Link>
        <Link to="/Gestion-pagos">Pagos</Link>
        <Link to="/Gestion-estadisticas" >Estadísticas y reportes</Link>
        <Link to="Gestion-/permisos">Permisos y roles</Link>
      </nav>


      
    </aside>
  );
};

export default SidebarAdmin;
