import React from 'react';
import styles from './InicioCliente.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { FiBell, FiSearch} from 'react-icons/fi';
import ProfileDropdown from './Profiledropdown'



const HeaderClient = () => {
  return (
    <header className={styles.headerContainer}>
    <div className={styles.headerLeft}>
      <img src={logo} alt="EDBAY Logo" className={styles.logo} />
    </div>

    <div className={styles.searchContainer}>
      <FiSearch className={styles.icon2} />
      <input type="text" placeholder="Buscar..." className={styles.searchInput} />
    </div>

    <nav className={styles.headerNav}>
      <Link to="/cursos">Cursos</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/Planes">Planes</Link>
      <Link to="/Contactos">Contactos</Link>
    </nav>

    <div className={styles.headerIcons}>
        <FiBell className={styles.icon}  />
        <ProfileDropdown />
        
    </div>
  </header>

  );
};

export default HeaderClient;