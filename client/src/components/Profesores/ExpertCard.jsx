import React from "react";
import styles from "./ExpertCard.module.css";
import Python from "../../assets/python.png";

const ExpertCard = ({ name, role, course, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{role}</p>
        <div className={styles.course}>
          <img src={Python} alt="Curso Python" />
          <span>{course}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
