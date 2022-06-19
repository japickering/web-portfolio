import React from "react";
import PortfolioContent from "../components/PortfolioContent";
import FlexSlider from "../components/FlexSlider";

export default function Home({ title, headline, kidsloop, qbots, jdsports }) {
	return (
		<main>
			<section className="hero" tabIndex="0">
				<div className="content">
					<h1 className="title">{title}</h1>
					<h2 className="headline mt-1">{headline}</h2>
				</div>
			</section>
			{/* <section className="showcase">
				<h3 className="subtitle">Showcase</h3>
			</section>
			<section className="player" tabIndex="0">
			</section> */}
			<section className="featured fadein" tabIndex="0">
				<PortfolioContent {...kidsloop} />
				<FlexSlider {...kidsloop} />
			</section>
			<section className="featured fadein" tabIndex="0">
				<PortfolioContent {...qbots} />
				<div className="products">
					<img src={qbots.img} alt={qbots.title} />
				</div>
			</section>
			<section className="featured fadein" tabIndex="0">
				<PortfolioContent {...jdsports} />
				<FlexSlider {...jdsports} />
			</section>
		</main>
	);
}
