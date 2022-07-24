import React from 'react';

export default function Socials({ socials }) {
  return (
    <ul className='socials' aria-label='menu'>
      {socials.map((item) => {
        return (
          <li key={item.name}>
            <a href={item.url} target='_blank' rel='noopener noreferrer'>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
