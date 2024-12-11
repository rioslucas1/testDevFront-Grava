import React from 'react';
import Image from 'next/image';
import HeroBox from './HeroBox';
import { montserrat } from './fonts'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <Image
          src="/pokemon.jpg"
          alt="Pokedex"
          width={500}
          height={300}
          className="hero-image"
        />
      </div>

      <div className="hero-content">
          <HeroBox texto="Welcome to the Pokemon world" className={montserrat.className}/>
          <HeroBox texto="Explore Pokemon, Abilities, and More" className={montserrat.className} />
          <HeroBox texto="Dive into the Pokémon Universe with detailed data on each Pokémon, their abilities, moves, and evolutions. Whether you are a seasoned trainer or new to the Pokémon world, this site has everything you need to know. Start your journey now and find your favorite Pokemon!" />
      </div>
    </section>
  );
};

export default Hero;
