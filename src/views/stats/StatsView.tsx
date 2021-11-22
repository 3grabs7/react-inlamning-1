/* eslint-disable react-hooks/exhaustive-deps */
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonApiService from '../../api/PokemonApiService';
import './StatsView.scss';

export const StatsView = () => {
	const [formSearchTerm, setFormSearchTerm] = useState<string | undefined>(
		undefined
	);
	const [pokemonCollection, setPokemonCollection] = useState<Pokemon[]>([]);
	const [pokemonResponse, setPokemonResponse] = useState<
		AxiosResponse | undefined
	>();
	const [loaded, setLoaded] = useState<boolean>(false);

	const fetchData = async () => {
		const response: AxiosResponse = await PokemonApiService.getAll();

		setPokemonResponse(response);

		const promiseArray: any = [];

		pokemonResponse?.data.results.forEach(async (result: any) => {
			promiseArray.push(await PokemonApiService.getOne(result.name));
			setPokemonCollection(
				promiseArray.map((pokemon: any) => {
					return {
						name: pokemon.data.name,
						img: pokemon.data.sprites.front_default,
					};
				})
			);
		});

		setLoaded(true);
	};

	useEffect(() => {
		(async () => {
			await fetchData();
		})();

		return () => {};
	}, [loaded]);

	const handleSearch = async () => {
		const response: AxiosResponse = await PokemonApiService.getOne(
			formSearchTerm!
		);

		setPokemonCollection([
			{
				name: response.data.name,
				img: response.data.sprites.front_default,
			},
		]);
	};

	return loaded ? (
		<div>
			<div className='form'>
				<div>SJUKA STATS</div>
				<label>Pokemon </label>
				<input
					type='text'
					onKeyDown={(event) => {
						if (event.key.toLowerCase() === 'enter') {
							handleSearch();
						}
					}}
					onChange={(event) => setFormSearchTerm(event.target.value)}
				/>
				<button onClick={handleSearch}>GO</button>
			</div>
			<div className='result'>
				{pokemonCollection.length > 0 ? (
					pokemonCollection.map((pokemon, i) => (
						<div key={i} className='pokemon'>
							<h1>{pokemon.name}</h1>
							<img src={pokemon.img} alt='' />
						</div>
					))
				) : (
					<div>"{formSearchTerm}" Nothing Found</div>
				)}
			</div>
		</div>
	) : (
		<div>LOADING</div>
	);
};

interface Pokemon {
	name: string;
	img: string;
}
