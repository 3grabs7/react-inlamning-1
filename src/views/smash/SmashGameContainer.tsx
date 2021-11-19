import React, { useState } from 'react';
import './SmashGameContainer.scss';
import { Difficulty, SmashGameOptions } from './SmashGameOptions';
import { SmashGameTarget } from './SmashGameTarget';

export function SmashGameContainer() {
	const [difficulty, setDifficulty] = useState(Difficulty.EASY);
	const targetComponentSize =
		difficultySize[difficulty.toString()].width *
		difficultySize[difficulty.toString()].height;

	const elements = [];
	for (let i = 0; i < targetComponentSize; i++) {
		elements.push(<SmashGameTarget key={i} />);
	}

	const setDifficultyCallback = (diff: Difficulty): void => {
		setDifficulty(diff);
	};

	return (
		<div className='wrapper'>
			<div className={generateContainerClass(difficulty)}>{elements}</div>
			<SmashGameOptions onDifficultChange={setDifficultyCallback} />
		</div>
	);
}

function generateContainerClass(diff: Difficulty): string {
	return `game-container ${diff.toString().toLowerCase()}`;
}

export const difficultySize: DifficultySize = {
	[Difficulty.EASY]: {
		width: 4,
		height: 2,
	},

	[Difficulty.MEDIUM]: {
		width: 8,
		height: 4,
	},

	[Difficulty.BJORN]: {
		width: 16,
		height: 9,
	},
};

export interface DifficultySize {
	[key: string]: TargetComponentSize;
}

export interface TargetComponentSize {
	width: number;
	height: number;
}
