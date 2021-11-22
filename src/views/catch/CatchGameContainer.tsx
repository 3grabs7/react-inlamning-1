import './CatchGameContainer.scss';
import playerStartImg from '../../shared/face-start.jpg';
import playerReadyImg from '../../shared/face-end.jpg';
import targetImg from '../../shared/rasmus-catch.png';
import { useState } from 'react';

export const CatchGameContainer = () => {
	const [playerReady, setPlayerReady] = useState(false);
	const [targetActive, setTargetActive] = useState(false);
	const [targetCatched, setTargetCatched] = useState(false);
	const [target, setTarget] = useState<JSX.Element | undefined>();
	const [gameOver, setGameOver] = useState(false);

	const resetGame = () => {
		setPlayerReady(false);
		setTargetActive(false);
		setTargetCatched(false);
		setGameOver(false);
	};

	const startGame = () => {
		setPlayerReady(true);

		const timeUntilTargetAppears = Math.random() * 3000;

		setTimeout(() => {
			setTargetActive(true);

			const position = {
				top: `${(Math.random() * 100).toString().split('.')[0]}%`,
				left: `${(Math.random() * 100).toString().split('.')[0]}%`,
			};

			setTarget(
				<div className='target-container' style={position}>
					<img
						onClick={() => {
							setTargetCatched(true);
							setTargetActive(false);
							setTimeout(() => {
								setPlayerReady(false);
								setTargetCatched(false);
							}, 500);
						}}
						src={targetImg}
						alt='target'
						id='target'
					/>
				</div>
			);
		}, timeUntilTargetAppears);
	};

	return (
		<div className='catch-game-container'>
			<div className='game-box'>
				{gameOver ? (
					<div className='game-over'>
						<h1>GAME OVER</h1>
						<button
							onClick={() => {
								resetGame();
							}}
						>
							GO AGAIN
						</button>
					</div>
				) : (
					<>
						{' '}
						<div className='player-container'>
							<img
								className={playerReady && !targetActive ? 'waiting' : ''}
								onMouseOver={() => {
									if (targetActive) return;
									startGame();
								}}
								onMouseLeave={() => {
									if (!targetActive) {
										setGameOver(true);
									}
								}}
								src={targetCatched ? playerReadyImg : playerStartImg}
								alt='player'
								id='player'
							/>
						</div>
						{targetActive ? target : <></>}
					</>
				)}

				<div className='catch-game-instructions'>
					{!gameOver && !playerReady && !targetActive
						? 'HOLD MOUSE OVER JONKEN AND WAIT'
						: ''}
					{!gameOver && playerReady && !targetActive ? 'WAIT FOR IT' : ''}
					{!gameOver && targetActive ? 'CATCH THAT MAN!' : ''}
				</div>
			</div>
			<div className='score-board'>Scoreboard</div>
		</div>
	);
};
