import React, {useEffect, useState} from 'react';
import Table from './components/Table'

import './App.css';

function App() {
  
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")
  const [headers] = useState([{hd:"Pokemon"}, {hd:"URL"}])
  const [pokemonPic, setPokemonPic] = useState("")

  useEffect(() => {
    /*
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(pikachu => pikachu.json()) // ginagawa na JSON to convert
    .then(pokemons => {
      setPokemonPic(pokemons.sprites.front_default)
    })
    */
  })


  // function na gumagana pag nag click ako
  // 
  const searchPoke = event => {
    try {
      fetch("https://pokeapi.co/api/v2/pokemon/" + search)
      .then(pikachu => pikachu.json()) // ginagawa na JSON to convert
      .then(pokemons => {
        setPokemonPic(pokemons.sprites.front_default)
      })
    } catch {
      alert('WALANG GANYANG POKE')
    }
  }

  const searchItem = event => {
    event.preventDefault();
    setSearch(event.target.value)
  }

  return (
    <div>
        <h3> Search: </h3>
          <input type="text" placeholder="Search pokemnz" onChange ={searchItem} />
          <button onClick={searchPoke} > Search </button>
        <img src={pokemonPic} alt="pokemon" />
    </div>
  );
}

export default App;
