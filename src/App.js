import React, {useEffect, useState} from 'react';
import Table from './components/Table'


import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [headers] = useState([{hd: "Pokemon"}])
  useEffect(() => {
   fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
   .then(response => response.json())
   .then(json => {
     setPokemon(json.results)
   })
  })
  
  return (
    <div>
    <Table items={pokemon} headers={headers} />
    </div>
  );
}

export default App;
