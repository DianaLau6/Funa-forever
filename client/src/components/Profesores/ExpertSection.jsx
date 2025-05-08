import React from "react";
import ExpertCard from "./ExpertCard";
import styles from "./ExpertSection.module.css";

const experts = [
    {
      name: "Isaac Vazquez",
      role: "Ing. Software",
      course: "Curso Python",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Diana Torres",
      role: "Ing. Software",
      course: "Curso Python",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Yamilet Vazquez",
      role: "Ing. Software",
      course: "Curso Python",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];
  
const ExpertsSection = () => {
  return (
    <section className={styles.container}>
      <h2>CONTAMOS CON EXPERTOS<br />DE LA INDUSTRIA</h2>
      <div className={styles.grid}>
        {experts.map((expert, idx) => (
          <ExpertCard key={idx} {...expert} />
        ))}
      </div>
    </section>
  );
};

export default ExpertsSection;
