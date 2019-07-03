import React, { useState,  Fragment } from 'react';
import Card from './Cards'
function PokeTypes() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("normal")

   // function na gumagana pag nag click ako
  const searchPoke = event => {
    console.log(search)
    try {
      fetch("https://pokeapi.co/api/v2/type/" + search  + "?limit=5")
      .then(pikachu => pikachu.json()) // ginagawa na JSON to convert
      .then(pokemons => {
        setPokemon(pokemons.pokemon)
        console.log(pokemon)
      })
    } catch {
      alert('No poke :(')
    }
  }
  const searchItem = event => {
    setSearch(event.target.value)
  }

  return (
    <div>
        <a href="/"> Back to home </a>
        <h3> PokeTypes</h3>
        <select onChange={searchItem}> 
          <option value="normal" selected> Normal </option>
          <option value="fire"> Fire </option>
          <option value="ice"> Ice </option>
          <option value="dark"> Dark</option>
          <option value="fairy"> Fairy </option>
        </select>

        <button onClick={searchPoke} > Display </button>
        <br />
        <Fragment>
        {pokemon.map(item => (
            <Card name={item.pokemon.name} url={item.pokemon.url} />
        ))}
      </Fragment>
    </div>
  );
}

export default PokeTypes;
