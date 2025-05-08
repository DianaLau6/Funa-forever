import React from 'react';
import styles from '../css/CursosTable.module.css';
import {FaChevronDown } from 'react-icons/fa';
import Search from './search';

const members = [
  { name: 'Ronald Richards', tech: 'C++', phone: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive' },
  { name: 'Marvin McKinney', tech: 'C#', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
  { name: 'Jerome Bell', tech: 'React', phone: '(629) 555-0129', email: 'jerome@google.com', country: 'Réunion', status: 'Active' },
  { name: 'Kathryn Murphy', tech: 'Firebase', phone: '(408) 555-0120', email: 'kathryn@microsoft.com', country: 'Curaçao', status: 'Active' },
  { name: 'Jacob Jones', tech: 'SQL', phone: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brazil', status: 'Active' },
  { name: 'Kristin Watson', tech: 'JavaScript', phone: '(704) 555-0127', email: 'kristin@facebook.com', country: 'Åland Islands', status: 'Inactive' },
];

const CursosTable = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>Cursos</h2>
          <span className={styles.subtext}>Active Members</span>
        </div>
        <div className={styles.actions}>
          <Search />
          <div className={styles.dropdown}>
            <span>Newest</span>
            <FaChevronDown />
          </div>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m, index) => (
            <tr key={index}>
              <td>{m.name}</td>
              <td>{m.tech}</td>
              <td>{m.phone}</td>
              <td>{m.email}</td>
              <td>{m.country}</td>
              <td>
                <span className={`${styles.status} ${m.status === 'Active' ? styles.active : styles.inactive}`}>
                  {m.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <span>Showing data 1 to 8 of 256K entries</span>
        <div className={styles.pages}>
          <button>&lt;</button>
          {[1, 2, 3, 4].map(num => (
            <button key={num} className={num === 1 ? styles.activePage : ''}>{num}</button>
          ))}
          <span>...</span>
          <button>40</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default CursosTable;
