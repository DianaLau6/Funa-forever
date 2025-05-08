import styles from '../css/Footer.module.css';
import { Mail, Phone, Clock } from 'lucide-react';
import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}></div>
      <div className={styles.container}>
        <div className={styles.section}>
          <img src={logo} alt="EDBAY Logo" className={styles.logo} />
          <p>Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p><Phone size={16} /> Tel: +9230943497</p>
          <p><Clock size={16} /> Response hours: 8 to 20</p>
          <p><Mail size={16} /> Email: info@domain.com</p>
        </div>
        <div className={styles.section}>
          <h4>Categories</h4>
          <ul>
            <li>Counseling</li>
            <li>Health and fitness</li>
            <li>Individual development</li>
            <li>more</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Links</h4>
          <ul>
            <li>About us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Contáctanos</h4>
          <input type="email" placeholder="Email" />
        </div>
      </div>
    </footer>
  );
}
