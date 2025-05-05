import React from 'react';
import Sidebar from './sidebar';
import styles from './InicioCliente.module.css';


const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      <main className={styles.mainContent}>

        {children}
      </main>
    </div>
  );
};

export default MainLayout;