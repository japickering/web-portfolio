import React from 'react';
import Skills from '../components/Skills';

export default function About({ about, author, avatar, skills }) {
  return (
    <main>
      <section className='about'>
        <div className='content fadein'>
          <div>
            <img src={avatar} className='avatar' alt='avatar' />
          </div>
          <div>
            <h2 className='title'>{author}</h2>
            <p>{about}</p>
          </div>
        </div>
      </section>
      <Skills skills={skills} />
    </main>
  );
}
