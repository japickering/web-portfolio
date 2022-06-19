import React from "react";
import Skills from "../components/Skills";

export default function About({ avatar, skills }) {
	return (
		<main>
			<section className="about" tabIndex="0">
				<div className="content fadein split">
					<div>
						<img src={avatar} className="avatar" alt="avatar" />
					</div>
					<div>
						<h2 className="title">James Pickering</h2>
						<p>
							James Pickering is a Front-end developer living in Manchester,
							England. He has built websites and interactive components for the
							fashion, training and digital marketing industries for the past 12
							years.
						</p>
						<p>
							He also writes technical tutorials relating to web design. In his
							spare time he enjoys photography and playing epic open world
							videogames.
						</p>
					</div>
				</div>
			</section>
			<Skills skills={skills} />
		</main>
	);
}
