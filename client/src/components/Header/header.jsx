import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { FiSearch } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';


const Header = () => {
  return (
    <header className={styles.headerContainer}>
    <div className={styles.headerLeft}>
      <img src={logo} alt="EDBAY Logo" className={styles.logo} />
    </div>

    <nav className={styles.headerNav}>
      <Link to="/cursos">Cursos</Link>
      <Link to="/ofertas">Ofertas</Link>
      <Link to="/sobre-nosotros">Sobre nosotros</Link>
    </nav>

    <div className={styles.headerIcons}>
      <FiSearch className={styles.icon} />
      <FiShoppingCart className={styles.icon} />
      <Link to="/Login"> <FiUser className={styles.icon} /> </Link>
    </div>
  </header>

  );
};

export default Header;