import React, {useEffect, useState} from 'react';
import { Card, Row, Col } from "react-bootstrap"

function PokemonCard({ url, name }) {

  const [pokeURL, setPokeURL] = useState("")
  console.log(pokeURL)

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setPokeURL(data)
    }
    fetching()
  
  }, [])
  

  return (<>
    {pokeURL ?
    <Col>
      <Card>
      <Card.Img src={pokeURL.sprites.front_default} />
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <ul>
          {pokeURL.abilities.map((ability) => <li>{ability.ability.name}</li>)}
        </ul>
      </Card.Text>
      </Card>
      </Col> : 
    <div>
      Loading...
    </div>
    }
    </>);
}

export { PokemonCard };
