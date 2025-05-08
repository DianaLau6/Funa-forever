import React from 'react';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    stars: 5,
    comment: '¡Excelente curso! Aprendí muchísimo y el contenido fue muy claro.',
    user: { name: 'Ana López', avatar: 'https://i.pravatar.cc/30?img=1' },
    published: true,
  },
  {
    stars: 4,
    comment: 'Muy buen curso, aunque algunos temas se podrían profundizar más.',
    user: { name: 'Carlos Méndez', avatar: 'https://i.pravatar.cc/30?img=2' },
    published: false,
  },
  {
    stars: 3,
    comment: 'El curso está bien, pero me hubiera gustado más ejercicios prácticos.',
    user: { name: 'Lucía Fernández', avatar: 'https://i.pravatar.cc/30?img=3' },
    published: false,
  },
];

const ReviewList = () => {
  return (
    <div>
      {reviews.map((r, i) => (
        <ReviewCard
          key={i}
          stars={r.stars}
          comment={r.comment}
          user={r.user}
          published={r.published}
        />
      ))}
    </div>
  );
};

export default ReviewList;