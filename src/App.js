import React, { useState } from 'react';

//components
import Navigation from './components/Navigation';
import Search from './components/Search';
import Stats from './components/Stats';
import About from './components/About';
import Error from './components/Error';
import Loader from './components/Loader';

function App() {
	const [ activeTab, setActiveTab ] = useState(true);
	const [ playerStats, setPlayerStats ] = useState({});
	const [ error, setError ] = useState('');
	const [ loading, setLoading ] = useState(false);

	return (
		<div className="app">
			<Navigation
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				setPlayerStats={setPlayerStats}
				setError={setError}
				setLoading={setLoading}
			/>
			<main className="main">
				{activeTab === true ? (
					<Search setPlayerStats={setPlayerStats} setError={setError} setLoading={setLoading} />
				) : (
					<About />
				)}
				{error === '' ? null : <Error error={error} />}
				{loading && <Loader />}
				{Object.keys(playerStats).length === 0 ? null : <Stats playerStats={playerStats} />}
			</main>
		</div>
	);
}

export default App;
