import React from 'react';
import styles from '../styles/gallery.module.css';
import { montserrat } from './fonts';

const GalleryItem = ({ imageSrc, altText, name, description }) => (
  <div className={styles.galleryItem}>
    <div className={styles.galleryImage}>
      <img src={imageSrc} alt={altText} />
    </div>

    <p className={`${styles.galleryText} ${montserrat.className} ${styles.nameText}`}>
      {name}
    </p>
    {description.map((line, index) => (
      <p key={index} className={`${styles.galleryText} ${styles.descriptionText}`}>
        {line}
      </p>
    ))}
  </div>
);

export default GalleryItem;
