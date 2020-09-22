import React, { useState, useEffect } from 'react';

//IMPORT REACT ICONS
import {
	GiTrophy,
	GiCrossedSwords,
	GiPodiumWinner,
	GiHastyGrave,
	GiTelefrag,
	GiTargetShot,
	GiGunshot,
	GiPineTree,
	GiBinoculars,
	GiBrightExplosion,
	GiBurningSkull
} from 'react-icons/gi';
import { TiEqualsOutline } from 'react-icons/ti';
import { AiFillExperiment } from 'react-icons/ai';
import noVehDataBackground from '../assets/noveh.png';

function Card(props) {
	const [ date, setDate ] = useState('');

	//add and remove listeners for hover the player card
	useEffect(() => {
		const cards = document.getElementsByClassName('card');
		Array.from(cards).forEach((elem) => {
			elem.addEventListener('mouseover', () => {
				elem.lastChild.style.display = 'block';
			});
		});
		return () => {
			Array.from(cards).forEach((elem) => {
				elem.removeEventListener('mouseover', () => {
					elem.lastChild.style.display = 'block';
				});
			});
		};
	}, []);

	//Set the date player join
	useEffect(
		() => {
			setDate(new Date(props.playerStats.created_at * 1000).toLocaleDateString());
		},
		[ props.playerStats.created_at ]
	);

	return (
		<div className="card">
			<div
				className="front-container"
				style={
					props.playerStats.big_icon === false ? (
						{ backgroundImage: `url(${noVehDataBackground})` }
					) : (
						{ backgroundImage: `url(${props.playerStats.big_icon})` }
					)
				}
			>
				<div className="front-nickname-container">
					<h3 className="nickname">{props.playerStats.nickname}</h3>{' '}
				</div>
				<div className="front-data-container">
					<h3 className="wins">Wins: {props.playerStats.wins}</h3>
					<h3 className="losses">Looses: {props.playerStats.losses}</h3>
					<h3 className="draws">Draws: {props.playerStats.draws} </h3>
				</div>
				<h5 className="tank-info">Most used tank: {props.playerStats.short_name}</h5>
				<h3 className="date">Player since: {date}</h3>
			</div>

			<div className="back-container">
				<h2 className="nickname">{props.playerStats.nickname}</h2>
				<div className="stats">
					<h4 className="stat">
						<span className="tooltip" data-tooltip="Global rating" />
						<GiTrophy /> {props.playerStats.global_rating}
					</h4>
					<h4 className="stat">
						<span className="tooltip" data-tooltip="Battles" />
						<GiCrossedSwords /> {props.playerStats.battles}
					</h4>
					<h4 className="stat">
						<span className="tooltip" data-tooltip="Wins" />
						<GiPodiumWinner /> {props.playerStats.wins}
					</h4>
					<h4 className="stat">
						<span className="tooltip" data-tooltip="Losses" />
						<GiHastyGrave /> {props.playerStats.losses}
					</h4>
					<h4 className="stat">
						<span className="tooltip" data-tooltip="Draws" />
						<TiEqualsOutline /> {props.playerStats.draws}
					</h4>
					<h4 className="stat">
						<span className="tooltip" data-tooltip="Frags" />
						<GiTelefrag /> {props.playerStats.frags}
					</h4>
					<h4 className="stat">
						<span className="tooltip" data-tooltip="Shots" />
						<GiGunshot /> {props.playerStats.shots}
					</h4>
					<h4 className="stat">
						<span className="tooltip" data-tooltip="Hits" />
						<GiTargetShot /> {props.playerStats.hits}
					</h4>
					<h4 className="stat">
						<span className="tooltip" data-tooltip="Hits %" />
						<GiTargetShot /> {`${props.playerStats.hits_percents}%`}
					</h4>
					<h4 className="stat">
						<span className="tooltip" data-tooltip="Trees cut" />
						<GiPineTree /> {props.playerStats.trees_cut}
					</h4>
					<h4 className="stat">
						<span className="tooltip" data-tooltip="Max frags" />
						<GiBurningSkull /> {props.playerStats.max_frags}
					</h4>
					<h4 className="stat">
						<span className="tooltip" data-tooltip="Max damage" />
						<GiBrightExplosion /> {props.playerStats.max_damage}
					</h4>
					<h4 className="stat">
						<span className="tooltip" data-tooltip="Max exp" />
						<AiFillExperiment /> {props.playerStats.max_xp}
					</h4>
					<h4 className="stat">
						<span className="tooltip" data-tooltip="Spotted" />
						<GiBinoculars /> {props.playerStats.spotted}
					</h4>
				</div>
			</div>
		</div>
	);
}

export default Card;
