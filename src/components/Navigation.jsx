import React from 'react';

function Navigation({ setActiveTab, activeTab, setPlayerStats, setError, setLoading }) {
	return (
		<nav>
			<div className="navigation-container">
				<button
					onClick={(e) => {
						e.preventDefault();
						setActiveTab(true);
					}}
					className={activeTab === true ? 'nav-btn active' : 'nav-btn'}
				>
					Search Player
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						setLoading(false);
						setError('');
						setPlayerStats({});
						setActiveTab(false);
					}}
					className={activeTab === false ? 'nav-btn active' : 'nav-btn'}
				>
					Check me
				</button>
			</div>
		</nav>
	);
}

export default Navigation;
