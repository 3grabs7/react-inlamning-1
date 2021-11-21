import React, { useState } from 'react';
import './ReactGameContainer.scss';

export const ReactGameContainer = () => {
	const [isActive, setIsActive] = useState(false);
	const [isWaiting, setIsWaiting] = useState(false);
	const [timeElapsed, setTimeElapsed] = useState(0);
	const [latest, setLatest] = useState<number | string>('- ');
	const [score, setScore] = useState<number | string>('- ');
	const [intervalTracker, setIntervalTracker] = useState<
		NodeJS.Timeout | undefined
	>();

	const onButtonClick = () => {
		// if game has started and timer is running
		if (isActive) {
			// clear timer, save score and reset game state
			if (intervalTracker) clearInterval(intervalTracker);
			setIsActive(false);
			if (score === '- ' || timeElapsed < score) setScore(timeElapsed);
			setLatest(timeElapsed);
			setTimeElapsed(0);
			return;
		}

		// set when timer will begin
		const timeUntilActive = Math.random() * 5000;
		// waiting will remove button from screen
		setIsWaiting(true);

		setTimeout(() => {
			setIsWaiting(false);
			setIsActive(true);
			const interval = setInterval(() => {
				setTimeElapsed((previousState) => {
					const number = previousState + 1;
					return number;
				});
			}, 1);
			setIntervalTracker(interval);
		}, timeUntilActive);
	};

	return (
		<div className='container'>
			<div className='animation'></div>
			<div className='content'>
				<div>
					Time Elapsed : {timeElapsed}ms <br />
					Latest : {latest}ms <br />
					High Score : {score}ms
				</div>
				{isWaiting ? (
					<></>
				) : (
					<button
						className={isActive ? 'active' : ''}
						onClick={() => onButtonClick()}
					>
						{isActive ? 'STOP' : 'START'}
					</button>
				)}
			</div>
		</div>
	);
};
