import React, { useState } from 'react';
import styles from './CourseGrid.module.css';
import FilterBar from './filterbar';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: 'PYTHON',
    students: 40,
    date: '1 - 28 July 2022',
    image: '/assets/python.jpg',
    price: 380,
    oldPrice: 500,
    tag: 'PYTHON',
  },
  {
    id: 2,
    title: 'C#',
    students: 11,
    date: '1 - 28 July 2022',
    image: '/assets/csharp.jpg',
    price: 678,
    oldPrice: 500,
    tag: 'C#',
  },
  {
    id: 3,
    title: 'HTML',
    students: 234,
    date: '1 - 28 July 2022',
    image: '/assets/html.jpg',
    price: 123,
    oldPrice: 540,
    tag: 'HTML',
  },
  {
    id: 4,
    title: 'JAVA SCRIPT',
    students: 342,
    date: '1 - 28 July 2022',
    image: '/assets/js.jpg',
    price: 567,
    oldPrice: 500,
    tag: 'JAVA SCRIPT',
  },
];

const CourseGrid = () => {
  const [filter, setFilter] = useState('All');

  const filteredCourses =
    filter === 'All'
      ? courses
      : courses.filter(course => course.tag === filter);

  return (
    <section className={styles.courseGrid}>
      <h2 className={styles.courseTitle}>CURSOS</h2>
      <FilterBar filter={filter} setFilter={setFilter} />
      <div className={styles.courseList}>
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CourseGrid;
