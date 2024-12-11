import React from 'react';
import HeroBox from './HeroBox';
import GalleryItem from './Gallery';
import styles from '../styles/gallery.module.css';

const ListadoSection = () => {
  return (
    <section className={styles.listadoSection}>
      <HeroBox texto="POKEDEX" className={styles.heroBoxBlue} />
      <HeroBox texto="All the information, abilities, types and different characteristics of Pokemon." className={styles.heroBoxDarkBlue} 
      />
      
      <div className={styles.listadoGallery}>
        {Array.from({ length: 6 }).map((_, index) => (
          <GalleryItem
            key={index}
            imageSrc={`/images/image${index + 1}.jpg`}
            altText={`Imagen ${index + 1}`}
            description={`Texto para imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ListadoSection;
