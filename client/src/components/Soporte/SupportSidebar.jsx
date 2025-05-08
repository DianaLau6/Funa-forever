import React from 'react';
import styles from './css/SupportSidebar.module.css';

const SupportSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <div className={styles.avatarWrapper}>
          <img
            src="https://i.pravatar.cc/60?img=12"
            alt="User"
            className={styles.avatar}
          />
          <span className={styles.statusDot}></span>
        </div>
        <h3 className={styles.name}>Samantha</h3>
        <p className={styles.email}>samantha@email.com</p>
      </div>
      <div className={styles.section}>
        <ul className={styles.menu}>
          <li className={styles.title}>Soporte</li>
          <li className={styles.active}>Reembolsos</li>
        </ul>
      </div>
    </div>
  );
};

export default SupportSidebar;
