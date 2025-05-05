import React from 'react';
import styles from './InicioCliente.module.css';
import defaultcurso from '../../assets/defaultcurso.png'


const CourseCardClient = ({ course }) => {
    console.log("Curso recibido:", course); 


  return (
    <div className={styles.card}>
       <img src={defaultcurso} alt={course.title || "Curso"} />
      <h3>{course.title}</h3>
      <p>📅 {course.date}</p>
      <p>👥 {course.students} estudiantes</p>
      <div className={styles.actions}>
        <button className={styles.viewButton}>Ver video</button>
        <button className={styles.addButton}>Agregar</button>
      </div>
    </div>
  );
};

export default CourseCardClient;
