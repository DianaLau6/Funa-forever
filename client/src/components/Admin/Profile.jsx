import React from 'react';
import styles from './css/SidebarAdmin.module.css';
import avatar from '../../assets/Perfil.jpg'; // Asegúrate de tener esta imagen

const Profile = () => {
  return (
      <div className={styles.userSection}>
        <div className={styles.avatarContainer}>
          <img src={avatar} alt="Samantha" className={styles.avatar} />
          <span className={styles.notificationDot}></span>
        </div>
        <h3 className={styles.name}>Samantha</h3>
        <p className={styles.email}>samantha@email.com</p>
      </div>

  )};

export default Profile;
