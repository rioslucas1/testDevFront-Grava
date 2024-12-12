import React from 'react';
import styles from '../styles/footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.textContainer}>
          <p className={styles.textTop}>Pokemon World</p>
          <p className={styles.textBottom}>2024</p>
        </div>
        <div className={styles.dots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
