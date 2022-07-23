import React from 'react';

export default function PortfolioContent({ title, desc, body }) {
  return (
    <div className='content'>
      <h2 className='subtitle'>{title}</h2>
      <h3>{desc}</h3>
      <p>{body}</p>
    </div>
  );
}
