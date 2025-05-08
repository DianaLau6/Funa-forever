import React, { useState } from 'react';
import styles from '../css/TransactionList.module.css';

const transactions = [
  { tipo: 'Ingreso', monto: 12000, lenguaje: 'JavaScript', fecha: '13/04/2022' },
  { tipo: 'Pérdida', monto: 59, lenguaje: 'Java', fecha: '10/04/2022' },
  { tipo: 'Pérdida', monto: 1200, lenguaje: 'Python', fecha: '27/03/2022' },
  { tipo: 'Ingreso', monto: 5400, lenguaje: 'C#', fecha: '15/03/2022' },
  { tipo: 'Ingreso', monto: 8000, lenguaje: 'C++', fecha: '13/03/2022' },
  { tipo: 'Pérdida', monto: 39, lenguaje: 'HTML', fecha: '10/03/2022' },
];

const ITEMS_PER_PAGE = 3;

const TransactionList = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);

  const paginated = transactions.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className={styles.wrapper}>
      {paginated.map((t, index) => (
        <div key={index} className={styles.row}>
          <span>{t.tipo}</span>
          <span className={t.tipo === 'Ingreso' ? styles.income : styles.loss}>
            ${t.monto.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
          </span>
          <span>{t.lenguaje}</span>
          <span>{t.fecha}</span>
        </div>
      ))}
      <div className={styles.pagination}>
        <button onClick={() => setPage(p => Math.max(p - 1, 1))}>&lt;</button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={page === i + 1 ? styles.active : ''}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => setPage(p => Math.min(p + 1, totalPages))}>&gt;</button>
      </div>
    </div>
  );
};

export default TransactionList;
