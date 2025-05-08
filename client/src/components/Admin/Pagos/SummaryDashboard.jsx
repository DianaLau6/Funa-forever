import React from 'react';
import SummaryCard from './SummaryCard';
import { FaArrowUp, FaArrowDown, FaDollarSign } from 'react-icons/fa';
import styles from '../css/SummaryCard.module.css';

const DashboardSummary = () => {
  return (
    <div className={styles.container}>
      <SummaryCard label="Entradas" icon={<FaArrowUp />} bgColor="#e63946" />
      <SummaryCard label="Salidas" icon={<FaArrowDown />} bgColor="#00b56d" />
      <SummaryCard label="Total" icon={<FaDollarSign />} bgColor="#111" />
    </div>
  );
};

export default DashboardSummary;
