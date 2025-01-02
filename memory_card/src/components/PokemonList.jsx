import { useState, useEffect, useRef } from 'react';
import Pokedex from 'pokedex-promise-v2';

async function getPokemon(id) {
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { method: 'GET' });
		if (!response.ok) {
			throw new Error(`Network response was not ok for #${id}:` + response.statusText);
		}
		const data = await response.json();
		console.log('Data received: ', data);
		return data;
	} catch (error) {
		console.error('There was a problem with the fetch operation: ' + error);
		return null;
	}
}

export function PokemonList() {
	const pokemon = getPokemon(25);
	console.log(pokemon.sprites.front_default);
	return <img className='pokemonPic' src={pokemon.sprites.front_default} alt=''></img>;
}
