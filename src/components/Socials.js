import React from 'react';
// import SocialIcon from './SocialIcon';

export default function Socials({ socials }) {
  return (
    <>
      <h4>Connect on social media</h4>
      <ul className='socials' aria-label='links'>
        {socials.map((item) => {
          return (
            <li key={item.name}>
              <a href={item.url} target='_blank' rel='noopener noreferrer'>
                <span>{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
