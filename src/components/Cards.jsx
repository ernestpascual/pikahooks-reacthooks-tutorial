import React, {useState, useEffect} from 'react';
import styled from 'tachyons-components'

const Wrapper = styled('div')` 
dib w-25
`

const Container = styled('article')`
flex
`
function PokeCards(props){
    const [pokemonPic, setPokemonPic] = useState("")
    const [weight, setWeight] = useState("")
    useEffect(() => {
        fetch(props.url)
        .then(pikachu => pikachu.json()) // ginagawa na JSON to convert
        .then(pokemons => {
          setPokemonPic(pokemons.sprites.front_default)
          setWeight(pokemons.weight)
        })
    })
   
    return(
        <Wrapper>
        <Container>
        <h1> {props.name} </h1>
        <img src={pokemonPic} alt="" />
        </Container>
        <h5> {weight} lbs</h5>
        </Wrapper>
    );
}

export default PokeCards;
