// TaskList.js
import React from 'react';
import styles from '../css/TaskList.module.css';

const TaskList = ({ date, tasks }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.date}>{date}</h2>
            <div className={styles.taskList}>
                {tasks.map((task, index) => (
                    <div key={index} className={styles.taskItem}>
                        <div className={styles.avatar}>{task.avatar}</div>
                        <div className={styles.taskDetails}>
                            <span className={styles.name}>{task.name}</span>
                            <span className={styles.description}>{task.description}</span>
                        </div>
                        <span className={styles.hours}>{task.hours}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;