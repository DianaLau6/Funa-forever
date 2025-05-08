import React from 'react';
import styles from '../css/CursosHeader.module.css';
import {FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
        <div className={styles.searchBox}>
                <FaSearch className={styles.searchIcon} />
                <input className={styles.searchInput} type="text" placeholder="Search" />
        </div>

    );
};

export default Search;