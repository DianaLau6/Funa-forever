import React from 'react';
import styles from '../../css/Sidebar.module.css';
import { Link } from 'react-router-dom';
import { FiHome, FiBookOpen, FiBarChart, FiUserCheck } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link to="/" className={styles.menuItem}>
              <FiHome className={styles.icon} />
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link to="/mis-cursos" className={styles.menuItem}>
              <FiBookOpen className={styles.icon} />
              <span>Mis cursos</span>
            </Link>
          </li>
          <li>
            <Link to="/progreso" className={styles.menuItem}>
              <FiBarChart className={styles.icon} />
              <span>Mi progreso</span>
            </Link>
          </li>
          <li>
            <Link to="/suscripciones" className={styles.menuItem}>
              <FiUserCheck className={styles.icon} />
              <span>Suscripciones</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
