import React from 'react';
import styles from '../css/SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ placeholder = "Buscar transacción", onSearch }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
      />
      <button className={styles.button} onClick={onSearch}>
        <FaSearch className={styles.icon} />
        <span>Buscar</span>
      </button>
    </div>
  );
};

export default SearchBar;
