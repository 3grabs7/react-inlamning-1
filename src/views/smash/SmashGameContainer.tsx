import React, { useEffect, useState } from 'react';
import './SmashGameContainer.scss';
import { Difficulty, SmashGameOptions } from './SmashGameOptions';
import { SmashGameTarget } from './SmashGameTarget';

export function SmashGameContainer() {
	const [difficulty, setDifficulty] = useState(Difficulty.EASY);
	const [elements, setElements] = useState<JSX.Element[]>([]);
	const [targetComponentSize, setTargetComponentSize] = useState(0);

	const setDifficultyCallback = (diff: Difficulty): void => {
		reset();
		setDifficulty(diff);
	};

	useEffect(() => {
		console.log('use effect triggers');

		setTargetComponentSize(calcTargetComponentSize(difficulty));
		setElements([...fillTargetCollection(targetComponentSize)]);
	}, [difficulty, targetComponentSize]);

	const reset = () => {
		setElements([]);
	};

	return (
		<div className='wrapper'>
			<div className={generateContainerClass(difficulty)}>{elements}</div>
			<SmashGameOptions onDifficultChange={setDifficultyCallback} />
		</div>
	);
}

function calcTargetComponentSize(diff: Difficulty): number {
	return (
		difficultySize[diff.toString()].width *
		difficultySize[diff.toString()].height
	);
}

function fillTargetCollection(size: number): JSX.Element[] {
	let elements: JSX.Element[] = [];

	for (let i = 0; i < size; i++) {
		elements.push(<SmashGameTarget key={i} />);
	}

	return elements;
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

	[Difficulty.WORDPRESS]: {
		width: 16,
		height: 9,
	},
	[Difficulty.NONE]: {
		width: 0,
		height: 0,
	},
};

export interface DifficultySize {
	[key: string]: TargetComponentSize;
}

export interface TargetComponentSize {
	width: number;
	height: number;
}
