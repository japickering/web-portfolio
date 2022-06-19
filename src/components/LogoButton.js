import React from "react";
import { Link } from "react-router-dom";

export default function LogoButton({ alt }) {
	return (
		<Link id="home" to="/">
			{/* <div className="logo"> */}
			<img src="logo.svg" alt={alt} />
			{/* </div> */}
		</Link>
	);
}
