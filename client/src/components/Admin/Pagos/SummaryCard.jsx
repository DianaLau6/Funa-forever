import React from 'react';
import styles from '../css/SummaryCard.module.css';

const SummaryCard = ({ label, icon, bgColor }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.icon}>{icon}</span>
    </div>
  );
};

export default SummaryCard;
