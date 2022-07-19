import React, { useEffect } from 'react';
import { slideButtonClick, updateSlider } from '../libs/slider';

function SlideButton({ label, type, slidesContainerId, className }) {
  if (type === 'prev') {
    return (
      <button className={type} aria-label={label} onClick={(e) => slideButtonClick(e, 0, slidesContainerId, className)}>
        <span className='hidden' aria-hidden='true'>
          {label}
        </span>
        <i className='fa fa-arrow-circle-left'></i>
      </button>
    );
  } else {
    <button className={type} aria-label={label} onClick={(e) => slideButtonClick(e, 1, slidesContainerId, className)}>
      <span className='hidden' aria-hidden='true'>
        {label}
      </span>
      <i className='fa fa-arrow-circle-right'></i>
    </button>;
  }
}

export default function Slider({ slidesContainerId, className, slides }) {
  useEffect(() => {
    updateSlider(0, className);
    document.querySelector('.prev').classList.add('hidden');
  }, [className]);

  return (
    <div className='slider-wrapper'>
      <nav>
        <SlideButton label='previous' type='prev' slidesContainerId={slidesContainerId} />
        <SlideButton label='next' type='next' slidesContainerId={slidesContainerId} />
      </nav>
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
