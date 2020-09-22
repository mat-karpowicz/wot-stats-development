import React from 'react';
import Card from './Card';

function Stats(props) {
	return (
		<div className="stats-container">
			<Card playerStats={props.playerStats} />
		</div>
	);
}

export default Stats;
