import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import './SmashGameOptions.scss';

export enum Difficulty {
	EASY = 'Easy',
	MEDIUM = 'Medium',
	BJORN = 'Bjorn',
}

export function SmashGameOptions(
	props: InferProps<typeof SmashGameOptions.propTypes>
) {
	const [diff, setDiff] = useState(Difficulty.EASY);

	return (
		<div className='game-option-container'>
			<h3>Diffculiticy</h3>
			<div>
				<p>Current : {diff}</p>
			</div>
			<div className='radio-group'>
				<input
					onChange={() => {
						setDiff(Difficulty.EASY);
						props.onDifficultChange(Difficulty.EASY);
					}}
					name='difficulty'
					id='easy'
					type='radio'
					defaultChecked
				/>
				<label htmlFor='easy'>Easy</label>
				<input
					onChange={() => {
						setDiff(Difficulty.MEDIUM);
						props.onDifficultChange(Difficulty.MEDIUM);
					}}
					name='difficulty'
					id='medium'
					type='radio'
				/>
				<label htmlFor='medium'>Medium</label>
				<input
					onChange={() => {
						setDiff(Difficulty.BJORN);
						props.onDifficultChange(Difficulty.BJORN);
					}}
					name='difficulty'
					id='bjorn'
					type='radio'
				/>
				<label htmlFor='bjorn'>Björn 2</label>
			</div>
		</div>
	);
}

SmashGameOptions.propTypes = {
	onDifficultChange: PropTypes.func.isRequired,
};
