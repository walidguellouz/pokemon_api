import React, { useState } from 'react';
import './App.css';

function App() {
  const [fetchPokemonArray, setFetchPokemonArray] = useState([])



  // - fetch Vanilla JS
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    .then(response => response.json())
    .then(response => {
        setFetchPokemonArray(response.results)
        console.log(response.results[0].name)
      }).
      catch(error => console.log(error))
  }

  
 

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <button onClick={fetchPokemon}>fetch pokemon</button>
      
      <p>{JSON.stringify(fetchPokemon)}</p>
      <h4>Fetch pokemon</h4>
      <table>
        <thead>
          <tr>
            
            <th>Pokemon Name</th>
            <th>Full Name</th>
            
          </tr>
        </thead>
        <tbody>
          {
            fetchPokemonArray.map((pokemon, index) => {
              return (
                <tr key={index}>
                  <td>{pokemon.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <hr />
      
    </div>
  );
}

export default App;
