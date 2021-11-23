import React, { useState } from 'react';
import './Nav.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import RoutePaths from '../routes/RoutePaths';
import logo from '../shared/logo.png';
import { useStats } from '../shared/stats-context';

export const Nav = () => {
	const navigate = useNavigate();
	const currentView = useLocation();

	const stats = useStats();
	const [navHover, setNavHover] = useState(false);

	return (
		<div className='navbar-top'>
			<ul>
				<div
					className='left'
					onMouseOver={() => {
						setNavHover(true);
					}}
					onMouseLeave={() => {
						setNavHover(false);
					}}
				>
					<img
						onClick={() => {
							navigate(RoutePaths.pokemon);
						}}
						className={navHover ? 'spinning' : ''}
						src={logo}
						alt=''
					/>
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
				</div>
				<div className='right'>
					<div>{stats?.currentLevel}</div>
					<p
						className={
							currentView.pathname === RoutePaths.stats
								? 'active-view stats-button'
								: 'stats-button'
						}
						onClick={() => {
							navigate(RoutePaths.stats);
						}}
					>
						Profile
					</p>
				</div>
			</ul>
		</div>
	);
};
