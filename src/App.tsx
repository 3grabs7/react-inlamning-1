import React from 'react';
import './App.scss';
import './shared/global.scss';
import { Nav } from './components/Nav';
import { Routing } from './routes/Routing';
import { StatsContext, defaultStats } from './shared/stats-context';

function App() {
	return (
		<StatsContext.Provider value={defaultStats}>
			<Routing>
				<Nav />
			</Routing>
		</StatsContext.Provider>
	);
}

export default App;
