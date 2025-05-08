import React from 'react';
import styles from '../css/HeaderBar.module.css';
import { FaBell, FaChevronDown } from 'react-icons/fa';

const HeaderBar = ({ title = "Título", date = "01 - 25 March, 2025", avatar }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleSection}>
        <h2>{title}</h2>
        <span className={styles.dateRange}>{date}</span>
      </div>
      <div className={styles.userSection}>
        <FaBell className={styles.icon} />
        <img
          className={styles.avatar}
          src={avatar || "https://i.pravatar.cc/150?img=47"}
          alt="Profile"
        />
        <FaChevronDown className={styles.icon} />
      </div>
    </div>
  );
};

export default HeaderBar;
