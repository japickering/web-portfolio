import React from 'react';

export default function Faqs({ faq }) {
  return (
    <main>
      <section className='hero' tabIndex='0'>
        <div className='content'>
          <h2 className='title'>Frequently Asked Questions</h2>
        </div>
      </section>
      <section className='faqs' tabIndex='0'>
        <div className='content fadein'>
          <ul>
            {faq.map((question, index) => {
              return (
                <li key={index}>
                  <blockquote>{question.q}</blockquote>
                  <p className='answer'>{question.a}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
