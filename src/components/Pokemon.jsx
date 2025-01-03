import { useState, useEffect, useRef } from 'react';
import Pokedex from 'pokedex-promise-v2';

async function getPokemon(id) {
	let data = null;
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { method: 'GET' });
		if (!response.ok) {
			throw new Error(`Network response was not ok for #${id}:` + response.statusText);
		}
		data = await response.json();
		return data;
	} catch (error) {
		console.error('Fetch Error: ' + error);
		return null;
	}
}

async function getRandomPokemon(seenPokemon, setSeenPokemon) {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=0');
	const data = await response.json();
	let number = 0;
	do {
		number = Math.floor(Math.random() * data.count + 1);
		console.log(number);
	} while (number in seenPokemon);
	setSeenPokemon({ ...seenPokemon, number });
	return number;
}
export function Pokemon({ seenPokemon, setSeenPokemon, key }) {
	const [pokemon, setPokemon] = useState(null);
	useEffect(() => {
		(async () => {
			const pokemonId = await getRandomPokemon(seenPokemon, setSeenPokemon);
			const data = await getPokemon(pokemonId);
			setPokemon(data);
		})();
	}, []);
	if (!pokemon) {
		return <p>Loading...</p>;
	}
	return (
		<div className='singlePokemon'>
			<img
				className='pokemonPic'
				src={pokemon.sprites.other['official-artwork']['front_default']}
				alt={pokemon.name}
			></img>
			<p>{pokemon.name[0].toLocaleUpperCase('en-US') + pokemon.name.slice(1)}</p>
		</div>
	);
}
