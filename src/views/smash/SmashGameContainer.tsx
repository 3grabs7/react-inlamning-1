import React, { useState } from 'react';
import './SmashGameContainer.scss';
import { Difficulty, SmashGameOptions } from './SmashGameOptions';
import { SmashGameTarget } from './SmashGameTarget';

export function SmashGameContainer() {
	const [difficulty, setDifficulty] = useState(Difficulty.EASY);
	const [targetComponentCollection, setTargetComponentCollection] = useState(
		createSmashTargetArray(difficultySize[difficulty.toString()])
	);

	const setDifficultyCallback = (diff: Difficulty): void => {
		setDifficulty(diff);
		setTargetComponentCollection(
			createSmashTargetArray(difficultySize[diff.toString()])
		);
	};

	return (
		<div>
			<p>{difficulty}</p>
			<div className={generateContainerClass(difficulty)}>
				{targetComponentCollection.map((target) => (
					<SmashGameTarget
						key={target.id}
						id={target.id}
						isSmashed={target.isSmashed}
					/>
				))}
			</div>
			<SmashGameOptions onDifficultChange={setDifficultyCallback} />
		</div>
	);
}

function generateContainerClass(diff: Difficulty): string {
	return `game-container ${diff.toString().toLowerCase()}`;
}

function createSmashTargetArray(
	targetComponentSize: TargetComponentSize
): SmashTarget[] {
	const numberOfTargetComponents =
		targetComponentSize.width * targetComponentSize.height;

	let targetComponentArray: SmashTarget[] = [];

	for (let i = 0; i < numberOfTargetComponents; i++) {
		targetComponentArray.push({
			id: i,
			isSmashed: false,
		});
	}

	return targetComponentArray;
}

const difficultySize: DifficultySize = {
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

export interface SmashTarget {
	id: number;
	isSmashed: boolean;
	onSmash: () => void;
}

export interface TargetComponentSize {
	width: number;
	height: number;
}
