import React from 'react';
import styles from './css/TicketCard.module.css';
import { CheckCircle, CircleAlert } from 'lucide-react';

const TicketCard = ({ ticket }) => {
  return (
    <div className={styles.card}>
      <p className={styles.ticketId}>Ticket #{ticket.id}</p>
      <h4 className={styles.title}>Nombre del Ticket</h4>
      <p className={styles.description}>{ticket.descripcion}</p>

      <div className={styles.footer}>
        <div className={styles.user}>
          <img src={ticket.foto} alt="usuario" className={styles.avatar} />
          <span className={styles.name}>{ticket.nombre}</span>
        </div>

        <div className={styles.status}>
          {ticket.resuelto ? (
            <>
              <CheckCircle color="green" size={14} />
              <span className={styles.resuelto}>Resuelto</span>
            </>
          ) : (
            <>
              <CircleAlert color="red" size={14} />
              <span className={styles.noResuelto}>Sin resolver</span>
            </>
          )}
        </div>

        <button className={styles.btn}>Responder</button>
      </div>
    </div>
  );
};

export default TicketCard;