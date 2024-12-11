import React from 'react';
import HeroBox from './HeroBox';
import Card from './card';
import { montserrat } from './fonts'; 

const Cards = () => {
  return (
    <div className="cards-section">
      <div className = "box-section">
      <HeroBox  texto="Discover Pokemon Types" className={`${montserrat.className} hero-box-blue`} />
      <HeroBox texto="In the Pokemon world, each creature belongs to a specific type. Discover some of the most well-known types and learn about their strengths and weaknesses !" className="hero-box-darkblue"/>
      </div>
      
      <div className="cards">
        <Card title="Fire Type 🔥" content="Fire-type Pokemon are known for their destructive power and their ability to launch fiery attacks. Be cautious of their high offensive potential!" />
        <Card title="Water Type 💧" content="Water-type Pokemon excel in aquatic environments and are known for their ability to control water. Find out what makes them so powerful!" />
        <Card title="Electric Type ⚡" content="Electric-type Pokemon are known for their speed and high-voltage attacks. Get ready to be amazed by their agility and skills!" />
      </div>
    </div>
  );
};

export default Cards;
