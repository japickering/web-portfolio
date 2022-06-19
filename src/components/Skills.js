import React, { useState } from "react";

export default function Skills({ skills }) {
	const [active, setActive] = useState(skills[0].title.toLowerCase());
	const [target, setTarget] = useState(skills[0].desc);

	return (
		<section className="skills" tabIndex="0">
			<div className="content fadein">
				<h2 className="title">Skills and Tech Stack</h2>
				<ul className="tabs" role="tablist">
					{skills.map((skill, i) => {
						return (
							<li key={i} className="tab">
								<button
									className={
										active === skill.title.toLowerCase()
											? "btn-tab active"
											: "btn-tab"
									}
									aria-selected={
										active === skill.title.toLowerCase() ? "true" : "false"
									}
									role="tab"
									onClick={() => {
										setActive(skill.title.toLowerCase());
										setTarget(skill.desc);
									}}
								>
									{skill.title}
								</button>
							</li>
						);
					})}
				</ul>
				<div className="tabs-content mt-1" role="tabpanel">
					<p>{target}</p>
				</div>
			</div>
		</section>
	);
}
