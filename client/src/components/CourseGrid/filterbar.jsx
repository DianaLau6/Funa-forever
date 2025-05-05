import React from 'react';
import styles from './CourseGrid.module.css';

const tags = ['All', 'JAVA', 'C#', 'PYTHON', 'JAVA SCRIPT', 'HTML'];

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className={styles.filterBar}>
      {tags.map(tag => (
        <button
          key={tag}
          className={filter === tag ? `${styles.filterButton} ${styles.active}` : styles.filterButton}
          onClick={() => setFilter(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
