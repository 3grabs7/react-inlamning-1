import PropTypes, { InferProps } from 'prop-types';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CatchView } from '../views/catch/CatchView';
import { HomeView } from '../views/home/HomeView';
import { NotFoundView } from '../views/not-found/NotFoundView';
import { PokemonView } from '../views/pokemon/PokemonView';
import { ReactView } from '../views/react/ReactView';
import { SmashView } from '../views/smash/SmashView';
import { StatsView } from '../views/stats/StatsView';
import routePaths from './RoutePaths';

export function Routing({ children }: InferProps<typeof Routing.propTypes>) {
	return (
		<BrowserRouter>
			{children}
			<Routes>
				<Route path={routePaths.home} element={<HomeView />} />
				<Route path={routePaths.stats} element={<StatsView />} />
				<Route path={routePaths.smash} element={<SmashView />} />
				<Route path={routePaths.catch} element={<CatchView />} />
				<Route path={routePaths.react} element={<ReactView />} />
				<Route path={routePaths.pokemon} element={<PokemonView />} />
				<Route path={''} element={<HomeView />} />
				<Route path={'*'} element={<NotFoundView />} />
			</Routes>
		</BrowserRouter>
	);
}

Routing.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};
