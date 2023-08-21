import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPencil, faAddressBook } from '@fortawesome/free-solid-svg-icons';

const menu = [
  { name: 'about', icon: faFile },
  { name: 'blog', icon: faPencil },
  { name: 'contact', icon: faAddressBook },
];

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const home = document.getElementById('home');
    home.addEventListener('click', function (e) {
      setActive('home');
    });
  }, []);

  return (
    <nav id='navbar' className='navbar'>
      <ul>
        {menu.map((item) => {
          return (
            <li key={item.name}>
              <Link
                to={item.name}
                className={active === item.name ? 'nav-item active' : 'nav-item'}
                onClick={() => {
                  setActive(item.name);
                }}>
                <FontAwesomeIcon className='icon' icon={item.icon} />
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
