import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import './SmashGameTarget.scss';
import targetImg from '../../shared/target.png';
//@ts-ignore
import smashSound from '../../shared/uh.mp3';
import targetImgSmashed from '../../shared/target-smashed.png';

export function SmashGameTarget() {
	const [smashed, setSmashed] = useState(false);
	const [targetDrawn, setTargetDrawn] = useState(true);

	const clickTarget = () => {
		if (smashed) return;

		const sound = new Audio(smashSound);
		sound.currentTime = 0.4;
		sound.play();
		setSmashed(true);

		setInterval(() => {
			setTargetDrawn(false);
		}, 200);
	};

	return (
		<div className='target'>
			{targetDrawn ? (
				<img
					onClick={clickTarget}
					src={smashed ? targetImgSmashed : targetImg}
					alt=''
					draggable='false'
				/>
			) : (
				''
			)}
		</div>
	);
}
