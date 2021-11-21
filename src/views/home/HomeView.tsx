import React from 'react';
import { HomeViewHeader } from './HomeViewHeader';
import './HomeView.scss';
import { HomeContent } from './HomeContent';

export const HomeView = () => {
	return (
		<div className='fade-in home-container'>
			<HomeViewHeader />
			<HomeContent />
		</div>
	);
};
