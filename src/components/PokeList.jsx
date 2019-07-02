import React, {useEffect, useState} from 'react';
import Table from './Table'
function PokeList() {

    const [pokemon, setPokemon] = useState([])
    const [headers] = useState([{hd:"Pokemon"}, {hd:"URL"}])
  
    useEffect(() => {
    
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
        .then(pikachu => pikachu.json()) // ginagawa na JSON to convert
        .then(pokemons => {
            setPokemon(pokemons.results)
      })
    })

  return (
    <div>
        <a href="/"> Back to home </a>
        <Table headers ={headers} items={pokemon} />
     </div>
  );

}

export default PokeList;
