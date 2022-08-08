import React from 'react';

export default function BuyMeCoffee({ link }) {
  return (
    <a className='i-block' href={link} rel='noreferrer' target='_blank'>
      <img
        src='https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=uRPIo7n&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff'
        alt='buy me a coffee'
      />
    </a>
  );
}
