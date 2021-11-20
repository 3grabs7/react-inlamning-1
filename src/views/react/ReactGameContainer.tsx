import React, { useEffect, useState } from 'react';
import './ReactGameContainer.scss';

export const ReactGameContainer = () => {
	const [isActive, setIsActive] = useState(false);
	const [timeElapsed, setTimeElapsed] = useState(0);
	const [latest, setLatest] = useState<number | string>('- ');
	const [score, setScore] = useState<number | string>('- ');
	const [intervalTracker, setIntervalTracker] = useState<
		NodeJS.Timeout | undefined
	>();

	useEffect(() => {
		//effect
		return () => {
			//cleanup
		};
	}, []);

	const onButtonClick = () => {
		if (isActive) {
			if (intervalTracker) {
				clearInterval(intervalTracker);
			}

			setIsActive(false);

			if (score === '- ' || timeElapsed < score) setScore(timeElapsed);

			setLatest(timeElapsed);
			setTimeElapsed(0);
			return;
		}

		const timeUntilActive = Math.random() * 5000;

		setTimeout(() => {
			setIsActive(true);
			const interval = setInterval(() => {
				if (isActive) {
					return;
				}
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
					ms High Score : {score}ms
				</div>
				<button
					className={isActive ? 'active' : ''}
					onClick={() => onButtonClick()}
				>
					{isActive ? 'STOP' : 'START'}
				</button>
			</div>
		</div>
	);
};
