import React from 'react';
import styles from '../css/CursosHeader.module.css';
import { FaUsers, FaUser, FaDesktop, FaSearch } from 'react-icons/fa';

const CursosHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.topBar}>
        <h2>Hello Evano <span className={styles.wave}>👋</span>,</h2>
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />
          <input className={styles.searchInput} type="text" placeholder="Search" />
        </div>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.card}>
          <FaUsers className={styles.icon} />
          <div>
            <p className={styles.label}>Total Customers</p>
            <h3 className={styles.value}>5,423</h3>
            <p className={styles.increase}>▲ 16% this month</p>
          </div>
        </div>

        <div className={styles.card}>
          <FaUser className={styles.icon} />
          <div>
            <p className={styles.label}>Members</p>
            <h3 className={styles.value}>1,893</h3>
            <p className={styles.decrease}>▼ 1% this month</p>
          </div>
        </div>

        <div className={styles.card}>
          <FaDesktop className={styles.icon} />
          <div>
            <p className={styles.label}>Active Now</p>
            <h3 className={styles.value}>189</h3>
            <div className={styles.avatars}>
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?img=${i}`}
                  alt={`Avatar ${i}`}
                  className={styles.avatar}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursosHeader;
