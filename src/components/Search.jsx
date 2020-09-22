import React from 'react';
import getPlayerInfo from '../searchModule';

function Search({ setPlayerStats, setError, setLoading }) {
	return (
		<div className="search-container">
			<form
				className="search-form"
				onSubmit={(e) => {
					e.preventDefault();
					const nickname = document.getElementById('search').value;
					getPlayerInfo(nickname, setPlayerStats, setError, setLoading);
				}}
			>
				<input className="search-input" placeholder="e.g. DonArni92 / Paweu21" type="text" id="search" />
				<button type="submit" className="search-btn">
					Search Player
				</button>
			</form>
		</div>
	);
}

export default Search;
