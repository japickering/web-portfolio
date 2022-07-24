import React from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioContent({ title, desc, body, techstack }) {
  return (
    <div className='content'>
      <h2 className='subtitle'>{title}</h2>
      <h3>{desc}</h3>
      <p>{body}</p>
      <p>
        <code>Tech stack:</code>
      </p>
      <ul className='tabs'>
        {techstack.map((tech) => {
          const tip = 'find out more about ' + tech;
          return (
            <li key={tech}>
              <Link to='/about' className='tech-tab' title={tip}>
                <code>{tech}</code>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
