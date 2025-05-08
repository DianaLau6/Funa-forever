import React from 'react';
import styles from './css/TopRightBar.module.css';
import { Bell, ChevronDown } from 'lucide-react';

const TopRightBar = () => {
  return (
    <div className={styles.container}>
      <Bell className={styles.icon} />
      <img
        src="https://i.pravatar.cc/30?img=12"
        alt="User Avatar"
        className={styles.avatar}
      />
      <ChevronDown className={styles.icon} />
    </div>
  );
};

export default TopRightBar;
