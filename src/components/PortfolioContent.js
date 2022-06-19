import React from "react";

export default function PortfolioContent({ title, desc, body }) {
	return (
		<div className="content">
			<h3 className="uppercase">
				<i className="fa fa-briefcase"></i> portfolio
			</h3>
			<h2 className="subtitle">{title}</h2>
			<h3>{desc}</h3>
			<p>{body}</p>
		</div>
	);
}
