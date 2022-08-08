import React from 'react';
import Socials from '../components/Socials';

export default function Contact({ socials }) {
  return (
    <main>
      <section className='hero' tabIndex='0'>
        <div className='content'>
          <h2 className='title'>Contact me</h2>
        </div>
      </section>
      <section className='contact' tabIndex='0'>
        <div className='content'>
          <Socials socials={socials} />
        </div>
      </section>
    </main>
  );
}
