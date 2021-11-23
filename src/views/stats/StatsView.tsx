import { useContext } from 'react';
import { StatsContext } from '../../shared/stats-context';

export const StatsView = () => {
	const stats = useContext(StatsContext);
	return (
		<div>
			<h3>{stats?.currentLevel}</h3>
			<p>{stats?.points}</p>
		</div>
	);
};
