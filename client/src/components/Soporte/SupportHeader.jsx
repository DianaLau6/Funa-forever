import React from 'react';
import styles from './css/SupportHeader.module.css';
import { Search, Filter } from 'lucide-react';

const SupportHeader = () => {
  return (
    <div className={styles.header}>
      <div>
        <h2 className={styles.title}>Soporte</h2>
        <p className={styles.date}>01 - 25 March, 2025</p>
      </div>
      <div className={styles.searchContainer}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Buscar"
            className={styles.searchInput}
          />
        </div>
      <div className={styles.actions}>
        
        <button className={styles.button}>Nuevo Ticket</button>
        <button className={styles.button}>
          <Filter size={16} style={{ marginRight: '10px' }} />
        </button>
      </div>
    </div>
  );
};

export default SupportHeader;
