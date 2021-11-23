import React from 'react';
import './App.scss';
import './shared/global.scss';
import { Nav } from './components/Nav';
import { Routing } from './routes/Routing';
import { StatsProvider } from './shared/stats-context';

function App() {
	return (
		<StatsProvider>
			<Routing>
				<Nav />
			</Routing>
		</StatsProvider>
	);
}

export default App;
