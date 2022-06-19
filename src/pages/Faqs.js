import React from "react";

export default function Faqs({ faqs }) {
	return (
		<main>
			<section className="hero" tabIndex="0">
				<div className="content">
					<h2 className="title">Frequently Asked Questions</h2>
				</div>
			</section>
			<section className="faqs" tabIndex="0">
				<div className="content fadein">
					<ul className="">
						{faqs.map((faq, index) => {
							return (
								<li key={index}>
									<blockquote>{faq.q}</blockquote>
									<p className="answer">{faq.a}</p>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		</main>
	);
}
