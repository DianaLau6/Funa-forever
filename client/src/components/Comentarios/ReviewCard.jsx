import React from 'react';
import styles from './css/ReviewCard.module.css';
import { Star, Circle } from 'lucide-react';

const ReviewCard = ({ stars = 3, comment, user, published }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>Comentario</h4>
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill={i < stars ? '#ffc107' : 'none'} color="#ffc107" />
        ))}
      </div>
      <p className={styles.comment}>{comment}</p>
      <div className={styles.footer}>
        <div className={styles.user}>
          <img src={user.avatar} alt="avatar" className={styles.avatar} />
          <span>{user.name}</span>
        </div>
        <div className={styles.status}>
          <Circle size={10} color="red" fill="red" />
          <span>{published ? 'Publicado' : 'Sin publicar'}</span>
        </div>
        <button className={styles.publishBtn}>
          {published ? 'Ocultar' : 'Publicar'}
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
