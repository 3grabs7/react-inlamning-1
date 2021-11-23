import { createContext } from 'react';
import { Stats } from '../interfaces/stats-context.interface';
import { Level } from './stats-context.enums';

export const defaultStats: Stats = {
	currentLevel: Level.NOOB,
	points: 0,
};

export const StatsContext = createContext<Stats | undefined>(undefined);
