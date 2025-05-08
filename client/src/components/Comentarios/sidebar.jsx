import React from 'react';
import styles from './css/SideBar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <div className={styles.avatarContainer}>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg" // Puedes cambiar esta URL
            alt="Samantha"
            className={styles.avatar}
          />
          <span className={styles.status}></span>
        </div>
        <h3 className={styles.name}>Samantha</h3>
        <p className={styles.email}>samantha@email.com</p>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.active}>General</li>
          <li>Publicadas</li>
          <li>No publicadas</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
