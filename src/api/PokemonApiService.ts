import http from './PokemonApi';

const getAll = () => {
	return http.get('/pokemon');
};

const getOne = (name: string) => {
	return http.get(`/pokemon/${name}/`);
};

export default {
	getAll,
	getOne,
};
