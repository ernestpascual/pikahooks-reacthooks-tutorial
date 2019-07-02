import React from 'react';
//import Table from './components/Table'
import { Route, Switch } from "react-router-dom";
import './App.css';
import PokeList from './components/PokeList'
import PokeSearch from './components/PokeSearch'
import PokeTypes from './components/PokeTypes'
import PokeHome from './components/PokeHome'
function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={ PokeHome } />
          <Route path="/pokelist" component={ PokeList } />
          <Route path="/pokesearch" component={ PokeSearch } />
          <Route path="/poketypes" component={ PokeTypes } />
        </Switch>
    </div>
  );
}

export default App;
