import React from 'react';
import styles from '../styles/gallery.module.css';
const HeroBox = ({ texto, className }) => {
  return (
    <div className={`${className} ${styles.heroBox}`}>
      <p>{texto}</p>
    </div>
  );
};

export default HeroBox;
