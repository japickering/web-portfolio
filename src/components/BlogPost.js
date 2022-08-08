import React from 'react';
import { scrollUp } from '../libs/scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function BlogPost({ date, title, author, summary, img, alt, content }) {
  return (
    <section className='blog' tabIndex='0'>
      <div className='content fadein'>
        <h2 className='title'>{title}</h2>
        <h4>
          <FontAwesomeIcon className='blog-icon' icon={faPencil} />
          by {author}
          <FontAwesomeIcon className='blog-icon' icon={faCalendar} />
          {date}
        </h4>
        <h4>{summary}</h4>
        {img.length > 0 && <img src={img} className='featured-image' alt={alt} />}
        <ul>
          {content.map((item, i) => {
            return (
              <li key={i}>
                {item.subtitle && item.subtitle.length > 0 && <h4 className='subtitle'>{item.subtitle}</h4>}
                <p>{item.text}</p>
                {item.code && item.code.length > 0 && (
                  <div className='snippet'>
                    <pre className='highlight'>
                      <code>{item.code}</code>
                    </pre>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <button
          className='btn btn-more'
          onClick={() => {
            scrollUp();
            window.history.go(-1);
          }}>
          <i className='fa fa-arrow-left'></i>Back
        </button>
      </div>
    </section>
  );
}
