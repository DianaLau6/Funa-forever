import React from 'react';
import styles from './CourseGrid.module.css';

const CourseCard = ({ course }) => {
  return (
    <div className={styles.courseCard}>
      <img src={course.image} alt={course.title} className={styles.courseImage} />
      <div className={styles.courseBody}>
        <div className={styles.courseMeta}>
          <span>{course.date}</span>
          <span>👨‍🎓 {course.students} students</span>
        </div>
        <h3>{course.title}</h3>
        <p>
          Product Management Masterclass, you will learn with Sarah Johnson...
        </p>
        <div className={styles.coursePricing}>
          <span className={styles.newPrice}>${course.price}</span>
          <span className={styles.oldPrice}>${course.oldPrice}</span>
        </div>
        <button className={styles.enrollButton}>Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;