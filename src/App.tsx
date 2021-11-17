import React, { useState } from 'react';
import './App.scss';
import { Nav } from './components/Nav';
import { Routing } from './routes/Routing';

enum appState {
	GUEST = 'Guest',
	PATRON = 'Patron',
	VIP = 'Vip',
}

function App() {
	return (
		<Routing>
			<Nav />
		</Routing>
	);
}

export default App;
