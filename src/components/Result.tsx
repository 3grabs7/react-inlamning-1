import { FC } from 'react';
import './Result.scss';

interface ResultProps {
	score: string;
	scoreMetric: string;
}

export const Result: FC<ResultProps> = (props) => {
	return (
		<div className='result-list-item'>
			<p>
				Score : {props.score} {props.scoreMetric}
			</p>
		</div>
	);
};
