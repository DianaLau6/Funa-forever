import React from 'react';
import styles from './css/ReviewsHeader.module.css';
import { Filter, Edit } from 'lucide-react'; 

const ReviewsHeader = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Reseñas y Comentarios</h2>
      <input className={styles.search} type="text" placeholder="Buscar" />
      <div className={styles.buttons}>
        <button className={styles.editButton}>
          <Edit size={14} style={{ marginRight: '5px' }} />
          Editar
        </button>
        <button className={styles.filterButton}>
          <Filter size={14} style={{ marginRight: '5px' }} />
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default ReviewsHeader;
