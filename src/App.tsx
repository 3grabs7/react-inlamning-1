import React, { useState } from 'react';
import './App.scss';
import './shared/global.scss';
import { Nav } from './components/Nav';
import { Routing } from './routes/Routing';

function App() {
	return (
		<div>
			<Routing>
				<Nav />
			</Routing>
		</div>
	);
}

export default App;
