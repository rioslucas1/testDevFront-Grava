import React, { useEffect, useState } from 'react';
import HeroBox from './HeroBox';
import GalleryItem from './Gallery';
import styles from '../styles/gallery.module.css';

const ListadoSection = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6');
        const data = await response.json();

        const pokemonDetailsPromises = data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonDetails = await pokemonResponse.json();

          return {
            name: pokemon.name,
            image: pokemonDetails.sprites.front_default,
            description: [
              `Tipos: ${pokemonDetails.types.map(type => type.type.name).join(', ')}`,
              `Habilidades: ${pokemonDetails.abilities.map(ability => ability.ability.name).join(', ')}`,
              `Altura: ${pokemonDetails.height} - Peso: ${pokemonDetails.weight}`
            ],
            types: pokemonDetails.types.map(type => type.type.name),
          };
        });

        const detailedPokemonData = await Promise.all(pokemonDetailsPromises);
        setPokemonData(detailedPokemonData);
        setFilteredData(detailedPokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonData();
  }, []);


  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === 'all') {
      setFilteredData(pokemonData);
    } else {
      const filtered = pokemonData.filter((pokemon) =>
        pokemon.types.includes(selectedFilter)
      );
      setFilteredData(filtered);
    }
  };

  return (
    <section className={styles.listadoSection}>
      <HeroBox texto="Gallery Section" className={styles.heroBoxBlue} />
      <HeroBox texto="Choose the types of Pokemon you want to view in our gallery section, and dynamically discover their names, types and abilities of each of them." className={styles.heroBoxDarkBlue} />


      <div className={styles.filterContainer}>
        <label htmlFor="typeFilter" className={styles.filterLabel}>
          Filter by Type:
        </label>
        <select
          id="typeFilter"
          value={filter}
          onChange={handleFilterChange}
          className={styles.filterSelect}
        >
          <option value="all">All</option>
          <option value="grass">Grass</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="ghost">Ghost</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div className={styles.listadoGallery}>
        {filteredData.map((pokemon, index) => (
          <GalleryItem
            key={index}
            imageSrc={pokemon.image}
            altText={pokemon.name}
            name={pokemon.name}
            description={pokemon.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ListadoSection;
