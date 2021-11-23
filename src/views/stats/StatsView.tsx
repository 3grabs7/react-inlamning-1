import { useState } from 'react';
import { useStats, useStatsUpdate } from '../../shared/stats-context';
import './StatsView.scss';

export const StatsView = () => {
	const stats = useStats();
	const statsChange = useStatsUpdate();
	const [name, setName] = useState(stats?.name);

	const handleNameChange = () => {
		statsChange({
			name,
			currentLevel: stats?.currentLevel,
			points: stats?.points,
		});
		setName('');
	};

	return (
		<div>
			<h1>Tjenna {stats?.name}</h1>
			<h3>{stats?.currentLevel}</h3>
			<p>{stats?.points}</p>

			<div className='options'>
				<h3>Change name</h3>
				<input
					type='text'
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<button onClick={handleNameChange}>Change</button>
			</div>
		</div>
	);
};
