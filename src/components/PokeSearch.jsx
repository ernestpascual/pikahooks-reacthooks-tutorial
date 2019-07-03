import React, { useState} from 'react';

function PokeSearch() {
  const [pokemonPic, setPokemonPic] = useState("")
  const [search, setSearch] = useState("")

   // function na gumagana pag nag click ako
  const searchPoke = event => {

    try {
      fetch("https://pokeapi.co/api/v2/pokemon/" + search)
      .then(pikachu => pikachu.json()) // ginagawa na JSON to convert
      .then(pokemons => {
        setPokemonPic(pokemons.sprites.front_default)
      })
    } catch {
      alert('No poke :(')
    }
  }

  const searchItem = event => {
    event.preventDefault();
    setSearch(event.target.value)
  }
  return (
    <div>
        <a href="/"> Back to home </a>
        <h3> Search: </h3>
        <input type="text" placeholder="Search pokemnz" onChange ={searchItem} />
        <button onClick={searchPoke} > Search </button>
      
        <img src={pokemonPic} alt="pokemon" />
    </div>
  );
}

export default PokeSearch;
