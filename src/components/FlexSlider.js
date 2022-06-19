// slider smart component
import React, { useEffect } from "react";

function onClickSlideButton(e, id, slidesContainerId, dotClassName) {
	e.preventDefault();
	updateSliderNav(id, dotClassName);

	// update slides
	const slides = document.getElementById(slidesContainerId);
	slides.classList.remove(slidesContainerId + 0);
	slides.classList.remove(slidesContainerId + 1);

	// 2 slides supported
	if (id === 0) {
		slides.classList.add(slidesContainerId + 0);
		document.querySelector(".prev").classList.add("hidden");
		document.querySelector(".next").classList.remove("hidden");
	} else if (id === 1) {
		slides.classList.add(slidesContainerId + 1);
		document.querySelector(".prev").classList.remove("hidden");
		document.querySelector(".next").classList.add("hidden");
	} else {
		slides.classList.add(slidesContainerId + 0);
		document.querySelector(".prev").classList.add("hidden");
		document.querySelector(".next").classList.remove("hidden");
	}
}

function updateSliderNav(id, dotNavClass) {
	const btns = document.getElementsByClassName(dotNavClass);
	for (let i = 0; i < btns.length; i++) {
		btns[i].classList.remove("active");
	}
	btns[id].classList.add("active");
}

export default function FlexSlider({ slidesContainerId, dotNavClass, slides }) {
	useEffect(() => {
		updateSliderNav(0, dotNavClass);
		document.querySelector(".prev").classList.add("hidden");
	}, [dotNavClass]);

	return (
		<div className="slider-wrapper">
			<nav>
				<button
					className="prev"
					aria-label="previous"
					onClick={(e) =>
						onClickSlideButton(e, 0, slidesContainerId, dotNavClass)
					}
				>
					<span className="hidden" aria-hidden="true">
						previous
					</span>
					<i className="fa fa-arrow-circle-left"></i>
				</button>
				<button
					className="next"
					aria-label="next"
					onClick={(e) =>
						onClickSlideButton(e, 1, slidesContainerId, dotNavClass)
					}
				>
					<span className="hidden" aria-hidden="true">
						next
					</span>
					<i className="fa fa-arrow-circle-right"></i>
				</button>
			</nav>
			<ul id={slidesContainerId} className="container-slides">
				{slides.map((slide) => {
					return (
						<li key={slide.id}>
							<img
								className="slide"
								src={slide.img}
								alt={slide.alt}
								title={slide.alt}
							/>
						</li>
					);
				})}
			</ul>
			<ul className="dotnav">
				{slides.map((slide) => {
					return (
						<li key={slide.id}>
							<button
								className={dotNavClass}
								aria-label={"slide" + slide.id}
								onClick={(e) =>
									onClickSlideButton(
										e,
										slide.id,
										slidesContainerId,
										dotNavClass
									)
								}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
