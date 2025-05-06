import React from 'react';
import styles from '../css/ActivitySection.module.css';
import ActivityChart from './ActivityChart';
import avatar1 from '../../../assets/Perfil.jpg';
import avatar2 from '../../../assets/Perfil.jpg';
import avatar3 from '../../../assets/Perfil.jpg';
import avatarAdd from '../../../assets/plus-icon.png'; // ícono de suma


const ActivitySection = () => {
  const activityData = [12, 8, 10, 7, 9, 11, 6, 10, 12, 14, 7, 9, 13, 15, 10];

  return (
    <div className={styles.activityWrapper}>
      <div className={styles.activityCard}>
        <div className={styles.header}>
          <h3>Clientes</h3>
          <div className={styles.avatars}>
            <img src={avatar1} alt="user1" />
            <img src={avatar2} alt="user2" />
            <img src={avatar3} alt="user3" />
            <img src={avatarAdd} alt="add" />
          </div>
        </div>
        <span className={styles.date}>01 - 25 March, 2025</span>
        <ActivityChart data={activityData} />
      </div>

      <div className={styles.activityCard}>
        <div className={styles.header}>
          <h3>Colaboradores</h3>
          <div className={styles.avatars}>
            <img src={avatar1} alt="user1" />
            <img src={avatar2} alt="user2" />
            <img src={avatar3} alt="user3" />
            <img src={avatarAdd} alt="add" />
          </div>
        </div>
        <span className={styles.date}>01 - 25 March, 2025</span>
        <ActivityChart data={activityData} />
      </div>
    </div>
  );
};

export default ActivitySection;

