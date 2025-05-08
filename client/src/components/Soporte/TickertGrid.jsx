import React from 'react';
import TicketCard from './TicketCard';
import './css/Support.css'; // o usa CSS Modules si prefieres

const tickets = [
  {
    id: '131234',
    descripcion:
      'Me gustó mucho el curso, aprendí bastante y los profesores fueron muy claros.',
    resuelto: false,
    nombre: 'Jacson',
    foto: 'https://i.pravatar.cc/40?img=1'
  },
  {
    id: '131234',
    descripcion:
      'Me gustó mucho el curso, aprendí bastante y los profesores fueron muy claros.',
    resuelto: false,
    nombre: 'Jacson',
    foto: 'https://i.pravatar.cc/40?img=1'
  },
  {
    id: '131235',
    descripcion:
      'Excelente material y contenido actualizado. Muy recomendable.',
    resuelto: true,
    nombre: 'Jacson',
    foto: 'https://i.pravatar.cc/40?img=2'
  },
  {
    id: '131236',
    descripcion:
      'Tuve un problema técnico pero lo resolvieron rápido, gracias al soporte.',
    resuelto: false,
    nombre: 'Jacson',
    foto: 'https://i.pravatar.cc/40?img=3'
  }
];

const Support = () => {
  return (
    <div className="ticket-grid">
      {tickets.map((t, i) => (
        <TicketCard key={i} ticket={t} />
      ))}
    </div>
  );
};

export default Support;
