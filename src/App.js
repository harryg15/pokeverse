import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import { InputGroup, Form, Container, Row, Col } from 'react-bootstrap';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {

  const [pokemonList, setPokemonList] = useState([])
  const [filterText, setFilterText] = useState("")
  console.log(pokemonList)

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(pokeApi)
      const data = await response.json()
      setPokemonList(data.results)
    }
    fetching()
  }, [])

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      const result = pokemonList.filter(pokemon => {
        return 
      })
    } else {

    }
}

  return (
    <div data-testid="app">
      <Navigation />
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Pokemon"
          aria-label="Pokemon"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </InputGroup>
      <Container className='col-md-8'>
      <Row>
      {pokemonList.map(pokemon => <PokemonCard name={pokemon.name} url={pokemon.url}/> )}
      </Row>
      </Container>
    </div>
  );
}

export { App };
