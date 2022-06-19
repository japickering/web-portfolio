import React from "react";
import { Link } from "react-router-dom";

export default function Hero({ title, headline, subtitle }) {
	return (
		<section className="hero fadein">
			<div className="content">
				<h1 className="title">{title}</h1>
				<h2 className="headline">{headline}</h2>
				<Link to="/contact" className="btn more">
					{subtitle}
				</Link>
			</div>
		</section>
	);
}
