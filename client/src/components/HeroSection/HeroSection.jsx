import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';
import robotImg from '../../assets/Robot.avif'; 

const HeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>EDBAY</h1>
        <p className={styles.heroSubtitle}>
          Nunca es tarde para crear una fundada más. Aprende a programar con nosotros.
        </p>
        <Link to="/Register"> <button className={styles.heroButton}>Crear cuenta</button> </Link>
      </div>
      <div className={styles.heroImage}>
        <img src={robotImg} alt="Robot EDBAY" /> 
      </div>
    </section>
  );
};

export default HeroSection;