import React from 'react';
import './Nav.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import RoutePaths from '../routes/RoutePaths';

export const Nav = () => {
	const navigate = useNavigate();
	const currentView = useLocation();

	return (
		<div>
			<ul>
				<li
					className={
						currentView.pathname === RoutePaths.home ? 'active-view' : ''
					}
					onClick={() => {
						navigate(RoutePaths.home);
					}}
				>
					Home
				</li>
				<li
					className={
						currentView.pathname === RoutePaths.smash ? 'active-view' : ''
					}
					onClick={() => {
						navigate(RoutePaths.smash);
					}}
				>
					Smash
				</li>
				<li
					className={
						currentView.pathname === RoutePaths.catch ? 'active-view' : ''
					}
					onClick={() => {
						navigate(RoutePaths.catch);
					}}
				>
					Catch
				</li>
				<li
					className={
						currentView.pathname === RoutePaths.react ? 'active-view' : ''
					}
					onClick={() => {
						navigate(RoutePaths.react);
					}}
				>
					React
				</li>
			</ul>
		</div>
	);
};
