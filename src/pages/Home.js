import React from 'react';
import PortfolioContent from '../components/PortfolioContent';

export default function Home({ title, headline, kidsloop, qbots, jdsports, wrenkitchens }) {
  return (
    <main>
      <section className='hero' tabIndex='0'>
        <div className='content'>
          <h1 className='title'>{title}</h1>
          <h2 className='headline'>{headline}</h2>
        </div>
      </section>
      <section className='featured fadein' tabIndex='0'>
        <PortfolioContent {...wrenkitchens} />
        <div className='products'>
          <img src={wrenkitchens.img} alt={wrenkitchens.alt} />
        </div>
      </section>
      <section className='featured fadein' tabIndex='0'>
        <PortfolioContent {...kidsloop} />
        <div className='products'>
          <img src={kidsloop.img} alt={kidsloop.alt} />
        </div>
      </section>
      <section className='featured fadein' tabIndex='0'>
        <PortfolioContent {...qbots} />
        <div className='products'>
          <img src={qbots.img} alt={qbots.title} />
        </div>
      </section>
      <section className='featured fadein' tabIndex='0'>
        <PortfolioContent {...jdsports} />
        {jdsports.slides.map((slide) => {
          return (
            <div key={slide.id} className='products'>
              <img src={slide.img} alt={slide.title} />
            </div>
          );
        })}
      </section>
    </main>
  );
}
