import styles from './InicioCliente.module.css';

const updates = [
  { id: 1, title: "Nuevo módulo de HTML5", category: "HTML", date: "2023-08-15", image: "/assets/html-card.jpg" },
  { id: 2, title: "Actualización de semántica", category: "HTML", date: "2023-08-14", image: "/assets/html-update.jpg" },
  { id: 3, title: "Actualización de semántica", category: "HTML", date: "2023-08-14", image: "/assets/html-update.jpg" },
  { id: 4, title: "Actualización de semántica", category: "HTML", date: "2023-08-14", image: "/assets/html-update.jpg" },
];

const LatestUpdates = () => {
  return (
    <section className={styles.updatesContainer}>
      <h2 className={styles.pageTitle}>Las últimas actualizaciones</h2>
      <div className={styles.updatesGrid}>
        {updates.map((update) => (
          <div key={update.id} className={styles.card}>
            <img src={update.image} alt={update.title} />
            <h3>{update.title}</h3>
            <p>📅 {update.date}</p>
            <p className={styles.category}>{update.category}</p>
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

export default LatestUpdates;
