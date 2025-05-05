import React, { useState } from 'react';
import styles from './InicioCliente.module.css';
import { FiUser } from 'react-icons/fi';

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.profileContainer}>
      <FiUser className={styles.icon} onClick={() => setOpen(!open)} />

      {open && (
        <div className={styles.dropdownMenu}>
          <p>Hola, Eugenia</p>
          <a href="/perfil">Ver mi perfil</a>
          <a href="/contacto">Contáctanos</a>
          <a href="/logout" className={styles.logout}>Cerrar sesión</a>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;