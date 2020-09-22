import React from 'react';

import mePhoto from '../assets/me.jpg'
// IMPORT ICONS
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiSpiderWeb } from 'react-icons/gi';

function About() {
	return (
		<div className="about-container">
			<div className="about">
				<p className="info">
					Thanks for stepping by! <br />I'm Mateusz and I puerly want to code. I currently live in Gdansk,
					Poland. <br /> You can find me on <a href="https://www.karpowiczm.pl">my website.</a> You can
					also check my other work there or on <a href="https://github.com/mat-karpowicz">GitHub</a>. <br />
					<br />
					<a
						className="reminder"
						href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						Stay Safe!
					</a>
				</p>
				<img className="photo" src={mePhoto} alt="pic of me" />
			</div>
			<div className="links">
				<li className="link">
					<a className="link__target" href="https://github.com/mat-karpowicz" rel="noopener noreferrer">
						<AiOutlineGithub />
					</a>
				</li>
				<li className="link">
					<a className="link__target" href="https://www.karpowiczm.pl" rel="noopener noreferrer">
						<GiSpiderWeb />
					</a>
				</li>
				<li className="link">
					<a className="link__target" href="https://www.linkedin.com/in/karpowiczm/" target='_blank' rel="noopener noreferrer">
						<AiFillLinkedin />
					</a>
				</li>
			</div>
		</div>
	);
}

export default About;
