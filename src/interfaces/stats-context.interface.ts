import { Level } from '../shared/stats-context.enums';

export interface Stats {
	currentLevel: Level;
	points: number;
	img?: string;
}
