import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'about', icon: 'file' },
  { name: 'blog', icon: 'edit' },
  { name: 'faq', icon: 'question-circle' },
  { name: 'contact', icon: 'comment' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const home = document.getElementById('home');
    home.addEventListener('click', function (e) {
      setActive('home');
    });
  }, []);

  const getMenuItems = (item) => {
    const displayName = item.name === 'faq' ? 'FAQs' : item.name;
    return (
      <li key={item.name}>
        <Link
          to={item.name}
          className={active === item.name ? 'nav-item active' : 'nav-item'}
          onClick={() => {
            setActive(item.name);
          }}>
          {displayName}
        </Link>
      </li>
    );
  };

  return (
    <nav id='navbar' className='navbar' tabIndex='0'>
      <ul>
        {menuItems.map((item) => {
          return getMenuItems(item);
        })}
      </ul>
    </nav>
  );
}
