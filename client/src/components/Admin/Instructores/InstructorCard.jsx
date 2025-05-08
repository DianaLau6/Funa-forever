import React from 'react';
import styles from '../css/InstructorGrid.module.css';
import { FaPen } from 'react-icons/fa';

const InstructorCard = ({ name, age, language, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.info}>
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Edad:</strong> {age}</p>
        <p><strong>Lenguaje:</strong> {language}</p>
        <FaPen className={styles.editIcon} />
      </div>
    </div>
  );
};

export default InstructorCard;
