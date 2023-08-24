import React from "react";
import PortfolioContent from "../components/PortfolioContent";
import Slider from "../components/Slider";

export default function Home({
  title,
  headline,
  wrenkitchens,
  kidsloop,
  qbots,
  intellicentrics,
  jdsports,
}) {
  return (
    <main>
      <section className="hero">
        <div className="content">
          <h1 className="title">{title}</h1>
          <h2 className="headline">{headline}</h2>
        </div>
      </section>
      <section className="featured">
        <PortfolioContent {...wrenkitchens} />
        <Slider previews={wrenkitchens.previews} slides={wrenkitchens.slides} />
      </section>
      <section className="featured fadein">
        <PortfolioContent {...kidsloop} />
        <div className="products">
          <img src={kidsloop.img} alt={kidsloop.alt} />
        </div>
      </section>
      <section className="featured fadein">
        <PortfolioContent {...qbots} />
        <div className="products">
          <img src={qbots.img} alt={qbots.title} />
        </div>
      </section>
      <section className="featured fadein">
        <PortfolioContent {...intellicentrics} />
        <div className="products">
          <img src={intellicentrics.img} alt={intellicentrics.alt} />
        </div>
      </section>
      <section className="featured fadein">
        <PortfolioContent {...jdsports} />
        {jdsports.slides.map((slide) => {
          return (
            <div key={slide.id} className="products">
              <img src={slide.img} alt={slide.alt} />
            </div>
          );
        })}
      </section>
    </main>
  );
}
