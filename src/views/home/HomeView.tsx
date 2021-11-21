import React from 'react';
import { HomeViewHeader } from './HomeViewHeader';
import './HomeView.scss';

export const HomeView = () => {
	return (
		<div className='fade-in home-container'>
			<HomeViewHeader />
			<div>Content</div>
			<div>Bottom</div>
		</div>
	);
};
