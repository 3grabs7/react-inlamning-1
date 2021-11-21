import { DifficultySize } from '../../interfaces/smash.interface';
import { Difficulty } from './difficulty.enum';

export const difficultySize: DifficultySize = {
	[Difficulty.EASY]: {
		width: 4,
		height: 2,
	},

	[Difficulty.MEDIUM]: {
		width: 8,
		height: 4,
	},

	[Difficulty.WORDPRESS]: {
		width: 16,
		height: 9,
	},
	[Difficulty.NONE]: {
		width: 0,
		height: 0,
	},
};
