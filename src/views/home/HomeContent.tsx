import { Results } from '../../components/Results';
import { useStats, useStatsUpdate } from '../../shared/stats-context';
import './HomeContent.scss';

export const HomeContent = () => {
	const stats = useStats();
	const statsUpdate = useStatsUpdate();

	return (
		<div className='home-content-wrapper'>
			<div className='stats-wrapper'>
				<div className='stats-box'>
					<h3>Name</h3>
					<h1>{stats?.name}</h1>
				</div>
				<div className='stats-box'>
					<h3>Level</h3>
					<h1>{stats?.currentLevel}</h1>
				</div>
				<div className='stats-box'>
					<h3>Points</h3>
					<h1>{stats?.points}</h1>
				</div>
				<div>
					<Results></Results>
				</div>
			</div>
		</div>
	);
};
