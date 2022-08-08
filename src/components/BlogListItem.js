import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function BlogListItem({ date, slug, title, author, summary, img, alt }) {
  return (
    <section className='blog' tabIndex='0'>
      <div className='content fadein'>
        <Link to={`/blog/${slug}/`}>
          <h2 className='title'>{title}</h2>
        </Link>
        <h3>
          <FontAwesomeIcon className='blog-icon' icon={faPencil} />
          by {author}
          <FontAwesomeIcon className='blog-icon' icon={faCalendar} />
          {date}
        </h3>
        <h4>{summary}</h4>
        {img.length > 0 && <img src={img} className='featured-image' alt={alt} />}
        <Link to={`/blog/${slug}/`} className='btn btn-more'>
          read more
        </Link>
      </div>
    </section>
  );
}
