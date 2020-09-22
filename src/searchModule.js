async function getPlayerInfo(nickname, setPlayerStats, setError, setLoading) {
	try {
		setError('');
		setLoading(true);
		//helper functions
		const playerId = await getPlayerId(nickname);
		const playerStats = await getPlayerStats(playerId);
		const tankId = await getMostUsedTankId(playerId);
		const tank = await getTank(tankId);

		//prepare player object
		const playerInfo = preparePlayerObj(playerStats, tank);

		//set player info as a state
		setPlayerStats(playerInfo);
		setLoading(false);
	} catch (error) {
		setPlayerStats({});
		setLoading(false);
		setError(error);
	}
}

function getPlayerId(nickname) {
	return new Promise((resolve, reject) => {
		if (nickname === '') {
			return reject('Please provide a nickname');
		}

		fetch(
			`https://api.worldoftanks.eu/wot/account/list/?application_id=${process.env
				.REACT_APP_API_KEY}&search=${nickname}`
		)
			.then((response) => response.json())
			.then(
				(data) =>
					data.meta.count === 1
						? resolve(data.data[0].account_id)
						: data.meta.count > 1
							? resolve(data.data.find((account) => account.nickname === nickname).account_id)
							: reject('No such player found - try case sensitive')
			)
			.catch((err) => reject('Something went wrong during player ID fetch'));
	});
}

function getPlayerStats(playerId) {
	return new Promise((resolve, reject) => {
		fetch(
			`https://api.worldoftanks.eu/wot/account/info/?application_id=${process.env
				.REACT_APP_API_KEY}&account_id=${playerId}`
		)
			.then((response) => response.json())
			.then((data) => resolve(data.data[playerId]))
			.catch((error) => reject('Something went wrong during player stats fetch'));
	});
}

function getMostUsedTankId(playerId) {
	return new Promise((resolve, reject) => {
		fetch(
			`https://api.worldoftanks.eu/wot/account/tanks/?application_id=${process.env
				.REACT_APP_API_KEY}&account_id=${playerId}`
		)
			.then((response) => response.json())
			.then((data) => {
				let tankId;

				if (data.data[playerId].length > 0) {
					tankId = data.data[playerId].reduce((prev, next) => {
						return prev.statistics.battles > next.statistics.battles ? prev : next;
					});
				} else {
					resolve({ tank_id: 'No vehicles data' });
				}
				resolve(tankId);
			})
			.catch((err) => reject('Something went wrong during most used vehicle ID fetch'));
	});
}

function getTank({ tank_id }) {
	return new Promise((resolve, reject) => {
		if (tank_id === 'No vehicles data') {
			return resolve({ images: { big_icon: false }, short_name: false });
		}

		fetch(
			`https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=${process.env
				.REACT_APP_API_KEY}&tank_id=${tank_id}`
		)
			.then((respone) => respone.json())
			.then((data) => resolve(data.data[tank_id]))
			.catch((error) => reject('Something went wrong during most used vehicle fetch'));
	});
}

function preparePlayerObj(
	{
		nickname,
		created_at,
		last_battle_time,
		global_rating,
		statistics: {
			all: {
				battles,
				draws,
				frags,
				hits,
				hits_percents,
				losses,
				max_damage,
				max_frags,
				max_xp,
				shots,
				spotted,
				wins
			},
			trees_cut
		}
	},
	{ images: { big_icon }, short_name }
) {
	const playerInfoObj = {
		nickname,
		created_at,
		last_battle_time,
		global_rating,
		battles,
		draws,
		frags,
		hits,
		hits_percents,
		losses,
		max_damage,
		max_frags,
		max_xp,
		shots,
		spotted,
		wins,
		big_icon,
		short_name,
		trees_cut
	};

	return playerInfoObj;
}

export default getPlayerInfo;
