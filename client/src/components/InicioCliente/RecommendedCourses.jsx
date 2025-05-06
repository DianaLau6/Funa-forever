import React from 'react';
import styles from './InicioCliente.module.css';
import defaultcurso from '../../assets/defaultcurso.png';

const courses = [
  { id: 1, title: "Curso de React Avanzado", image: "/assets/react.jpg", students: 200, date: "Mayo 2025" },
  { id: 2, title: "Introducción a Python para principiantes", image: "defaultcurs", students: 150, date: "Mayo 2025" },
  { id: 3, title: "Desarrollo Web Full Stack", image: "/assets/web.jpg", students: 300, date: "Junio 2025" },
  { id: 4, title: "Machine Learning Fundamentals", image: "/assets/ml.jpg", students: 180, date: "Julio 2025" }
];

const RecommendedCourses = () => {
  return (
    <section className={styles.recommendedContainer}>
      <h2 className={styles.pageTitle}>Cursos recomendados para ti</h2>
      <div className={styles.coursesGrid}>
        {courses.map((course) => (
          <div key={course.id} className={styles.courseCard}>
            <img src={course.image} className={styles.courseImage} />
            <h3>{course.title}</h3>
            <p>📅 {course.date}</p>
            <p>👥 {course.students} estudiantes</p>
            <div className={styles.actions}>
              <button className={styles.viewButton}>Ver video</button>
              <button className={styles.addButton}>Agregar</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedCourses;