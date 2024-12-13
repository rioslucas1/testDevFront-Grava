import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaGoogle, FaVoicemail } from 'react-icons/fa';
import styles from '../styles/footer.module.css';
import { FaMessage } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerContent}>
        <div className={styles.textContainer}>
          <p className={styles.textTop}>Pokemon World</p>
          <p className={styles.textBottom}>PokemonWorld / Sitio Web de validacion tecnica - Grava.io</p>
          <p className={styles.textBottom}>Rios Lucas Ariel</p>

        </div>
        <div className={styles.dots}>
          <a href="https://www.linkedin.com/company/grava-digital/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="https://grava.io/en/home" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaGoogle />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaMessage />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
