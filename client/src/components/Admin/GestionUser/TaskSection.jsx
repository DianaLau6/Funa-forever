import React from 'react';
import TaskList from './TaskList';
import styles from '../css/TaskList.module.css'

const TaskSection = () => {
    const tasksToday = [
        { avatar: '👤', name: 'Liam', description: 'Belanja di pasar', hours: '8 hr' },
        { avatar: '👤', name: 'Ken', description: 'Naik bus umum', hours: '10 hr' },
        { avatar: '👤', name: 'Harry', description: 'Bayar Listrik', hours: '5 hr' },
    ];

    const tasksMonday = [
        { avatar: '👤', name: 'Lauren', description: 'Makan Steak', hours: '4 hr' },
        { avatar: '👤', name: 'Camila', description: 'Nonton Bioskop', hours: '12 hr' },
    ];

    return (
        <div className={styles.Actividadcontainer}>
            <div>
                <TaskList date="Today" tasks={tasksToday} />
                <TaskList date="Monday, 23 March 2020" tasks={tasksMonday} />
            </div>
            <div>
                <TaskList date="Today" tasks={tasksToday} />
                <TaskList date="Monday, 23 March 2020" tasks={tasksMonday} />
            </div>
        </div>
    );
};

export default TaskSection;