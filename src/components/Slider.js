import React, { useState } from 'react';

export default function Slider({ previews, slides }) {
  const [currentSlide, currentSlideSet] = useState(0);

  const btnClick = (e, id) => {
    e.preventDefault();
    currentSlideSet(id);
  };

  return (
    <div className='slider-wrapper fadein'>
      <div className='slide'>
        <figure>
          <img src={slides[currentSlide].img} alt={slides[currentSlide].alt} />
          <caption>{slides[currentSlide].alt}</caption>
        </figure>
      </div>
      <ul className='menu'>
        {previews.map((preview) => {
          return (
            <li key={preview.id}>
              <a
                href='#top'
                className={currentSlide === preview.id ? 'active' : ''}
                onClick={(e) => btnClick(e, preview.id)}>
                <img src={preview.img} alt={preview.alt} />
                <caption>{preview.alt}</caption>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
