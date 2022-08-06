import React from 'react';
import Socials from '../components/Socials';

export default function Contact({ heading, socials }) {
  return (
    <main>
      <section className='contact' tabIndex='0'>
        <div className='content'>
          <h2 className='title'>Contact me</h2>
          <h3>{heading}</h3>
          <Socials socials={socials} />
        </div>
      </section>
    </main>
  );
}
