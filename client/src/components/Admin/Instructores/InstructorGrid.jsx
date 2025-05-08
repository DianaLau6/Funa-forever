import React from 'react';
import InstructorCard from './InstructorCard';
import styles from '../css/InstructorGrid.module.css';

const instructors = Array(6).fill({
  name: 'Isaac',
  age: 30,
  language: 'HTML',
  image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80',
});

const InstructorGrid = () => {
  return (
    <div className={styles.grid}>
      {instructors.map((inst, index) => (
        <InstructorCard key={index} {...inst} />
      ))}
    </div>
  );
};

export default InstructorGrid;
