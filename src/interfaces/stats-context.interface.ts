import { Level } from '../provider/stats-context.enums';

export interface Stats {
	currentLevel: Level;
	points: number;
	name: string;
	img?: string;
}
