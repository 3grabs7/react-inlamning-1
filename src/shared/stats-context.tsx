import React, { Context, createContext, FC, useContext, useState } from 'react';
import { Stats } from '../interfaces/stats-context.interface';
import { Level } from './stats-context.enums';

const defaultStats: Stats = {
	currentLevel: Level.NOOB,
	points: 0,
	name: 'Dread Pirate Roberts',
};

const StatsContext: Context<Stats | undefined> = createContext<
	Stats | undefined
>(undefined);
const StatsUpdateContext: Context<any> = createContext(undefined);

export const useStats = () => {
	return useContext(StatsContext);
};

export const useStatsUpdate = () => {
	return useContext(StatsUpdateContext);
};

export const StatsProvider: FC = ({ children }): JSX.Element => {
	const [stats, setStats] = useState<Stats>(defaultStats);

	const updateStats = (newStats: Stats): void => {
		setStats(newStats);
	};

	return (
		<StatsContext.Provider value={stats}>
			<StatsUpdateContext.Provider value={updateStats}>
				{children}
			</StatsUpdateContext.Provider>
		</StatsContext.Provider>
	);
};
