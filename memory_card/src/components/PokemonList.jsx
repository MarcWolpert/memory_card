import { useState, useEffect, useRef } from 'react';
import Pokedex from 'pokedex-promise-v2';

async function getPokemon({ id, setPokemon }) {
	let data = null;
	try {
		debugger;
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { method: 'GET' });
		if (!response.ok) {
			throw new Error(`Network response was not ok for #${id}:` + response.statusText);
		}
		data = await response.json();
		console.log('Data received: ', data);
		setPokemon(data);
	} catch (error) {
		console.error('There was a problem with the fetch operation: ' + error);
		return null;
	}
}

export function PokemonList() {
	// [pokemeon, setPokemon] = useState(null);
	// useEffect(() => {
	// 	setPokemon(result);
	// 	debugger;
	// }, [pokemon]);
	// console.log(pokemon.sprites.front_default);
	debugger;
	console.log('Hello');
	return (
		<img className='pokemonPic' src={pokemon.sprites.front_default} alt={pokemon.name}></img>
	);
}
