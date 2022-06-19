import React from "react";

export default function Contact(props) {
	return (
		<main>
			<section className="contact" tabIndex="0">
				<div className="content">
					<h2 className="title">Contact me</h2>
					<h3>{props.contact}</h3>
				</div>
			</section>
		</main>
	);
}
