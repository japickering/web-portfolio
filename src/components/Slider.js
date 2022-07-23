import React, { useEffect } from 'react';
import { slideButtonClick, updateSlider } from '../libs/slider';

export default function Slider({ slidesContainerId, className, slides }) {
  useEffect(() => {
    updateSlider(0, className);
  }, [className]);

  return (
    <div className='slider-wrapper'>
      <ul id={slidesContainerId} className='container-slides'>
        {slides.map((slide) => {
          return (
            <li key={slide.id}>
              <img className='slide' src={slide.img} alt={slide.alt} title={slide.alt} />
            </li>
          );
        })}
      </ul>
      <ul className='dotnav'>
        {slides.map((slide) => {
          return (
            <li key={slide.id}>
              <button
                className={className}
                aria-label={'slide' + slide.id}
                onClick={(e) => slideButtonClick(e, slide.id, slidesContainerId, className)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
