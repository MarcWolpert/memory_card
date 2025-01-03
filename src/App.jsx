import { useState } from 'react';
import './App.css';
import { Pokemon } from './components/Pokemon';

function App() {
	const [score, setScore] = useState(0);
	const [seenPokemon, setSeenPokemon] = useState({});
	const [clickedPokemon, setClickedPokemon] = useState({});
	// useEffect(() => {
	// 	return;
	// }, [clickedPokemon]);
	// 		onClick={setClickedPokemon({ ...clickedPokemon })}
	return (
		<>
			<div id='headline'>
				<div>
					<h1>Pokemon Memory Game</h1>
					<div>
						<h2>High Score: {score}</h2>
						<h2>Score: {}</h2>
					</div>
				</div>
				<div id='splitter'></div>
			</div>
			<div className='PokemonContainer'>
				{new Array(12).fill(null).map((_, index) => {
					return (
						<Pokemon
							seenPokemon={seenPokemon}
							setSeenPokemon={setSeenPokemon}
							key={index}
						></Pokemon>
					);
				})}
			</div>
		</>
	);
}

export default App;
