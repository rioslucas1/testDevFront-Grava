import React from 'react';
import styles from '../styles/gallery.module.css';

const Gallery = ({ imageSrc, altText, description }) => {
  return (
    <div className={styles.galleryItem}>
      <div className={styles.galleryImage}>
        <img src={imageSrc} alt={altText} />
      </div>
      <div className={styles.galleryText}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Gallery;
