import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import './SmashGameOptions.scss';
import { Difficulty } from './difficulty.enum';

export function SmashGameOptions(
	props: InferProps<typeof SmashGameOptions.propTypes>
) {
	const [diff, setDiff] = useState(Difficulty.EASY);

	const changeDifficulty = (diff: Difficulty) => {
		setDiff(diff);
		props.onDifficultChange(diff);
	};

	return (
		<div className='game-option-container'>
			<h3>Diffculiticy</h3>
			<div>
				<p>Current : {diff}</p>
			</div>
			<div className='button-group'>
				<button
					onClick={() => {
						changeDifficulty(Difficulty.EASY);
					}}
				>
					Easy
				</button>
				<button
					onClick={() => {
						changeDifficulty(Difficulty.MEDIUM);
					}}
				>
					Medium
				</button>
				<button
					onClick={() => {
						changeDifficulty(Difficulty.WORDPRESS);
					}}
				>
					Wordpress
				</button>
			</div>
		</div>
	);
}

SmashGameOptions.propTypes = {
	onDifficultChange: PropTypes.func.isRequired,
};
