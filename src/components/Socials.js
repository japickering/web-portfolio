import React from "react";

export default function Socials() {
	const menu = [
		{
			name: "Github",
			icon: "fa fa-github",
			url: "https://github.com/japickering/",
		},
		{
			name: "Instagram",
			icon: "fa fa-instagram",
			url: "https://instagram.com/jpuidev",
		},
		{
			name: "Twitter",
			icon: "fa fa-twitter",
			url: "https://twitter.com/jpuidev",
		},
	];

	return (
		<ul className="socials" aria-label="menu">
			{menu.map((item, index) => {
				return (
					<li key={index}>
						<a
							href={item.url}
							className="social-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className={item.icon}></i>&nbsp;&nbsp;{item.name}
						</a>
					</li>
				);
			})}
		</ul>
	);
}
