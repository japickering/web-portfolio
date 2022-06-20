import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scrollUp } from '../libs';

export default function SideMenu() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('home');

  const openMenu = () => {
    const slidemenu = document.querySelector('.slide-menu');
    const overlay = document.querySelector('.overlay');
    slidemenu.classList.add('active');
    overlay.classList.add('active');
    setToggle(true);
    scrollUp();
  };

  const closeMenu = () => {
    const slidemenu = document.querySelector('.slide-menu');
    const overlay = document.querySelector('.overlay');
    slidemenu.classList.remove('active');
    overlay.classList.remove('active');
    setToggle(false);
  };

  const onToggle = (e) => {
    e.preventDefault();
    toggle === true ? closeMenu() : openMenu();
  };

  useEffect(() => {
    closeMenu();
    const home = document.getElementById('home');
    home.addEventListener('click', function (e) {
      setActive('home');
      closeMenu();
    });

    window.addEventListener('resize', () => {
      setActive('home');
      closeMenu();
    });
  }, []);

  return (
    <nav id='sidebar' className='sidebar'>
      <button
        className='btn-toggle'
        aria-label='toggle button'
        onClick={(e) => {
          onToggle(e);
        }}>
        {toggle === true ? <span>&times;</span> : <span>&#8801;</span>}
      </button>
      <div className='overlay' aria-label='close button' onClick={() => closeMenu()}></div>
      <ul id='slide-menu' className='slide-menu' tabIndex='0'>
        <li className={active === 'home' ? 'active' : ''}>
          <Link
            to='/'
            className='nav-item'
            onClick={() => {
              closeMenu();
              setActive('home');
            }}>
            <i className='fa fa-home'></i>
            home
          </Link>
        </li>
        <li className={active === 'about' ? 'active' : ''}>
          <Link
            to='about'
            className='nav-item'
            onClick={() => {
              setActive('about');
              closeMenu();
            }}>
            <i className='fa fa-file'></i>
            about
          </Link>
        </li>
        <li className={active === 'blog' ? 'active' : ''}>
          <Link
            to='blog'
            className='nav-item'
            onClick={() => {
              setActive('blog');
              closeMenu();
            }}>
            <i className='fa fa-edit'></i>
            blog
          </Link>
        </li>
        <li className={active === 'faq' ? 'active' : ''}>
          <Link
            to='faq'
            className='nav-item'
            onClick={() => {
              setActive('faq');
              closeMenu();
            }}>
            <i className='fa fa-question-circle'></i>
            FAQs
          </Link>
        </li>
        <li className={active === 'contact' ? 'active' : ''}>
          <Link
            to='contact'
            className='nav-item'
            onClick={() => {
              setActive('contact');
              closeMenu();
            }}>
            <i className='fa fa-comment'></i>
            contact
          </Link>
        </li>
        <li>
          <a href='https://github.com/japickering/' className='nav-item' rel='noreferrer' target='_blank'>
            <i className='fa fa-github'></i>
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}
