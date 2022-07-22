import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import db from './db.json';
import blog from './blog.json';
import './main.scss';

import Home from './pages/Home';
import About from './pages/About';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import Socials from './components/Socials';
import BuyMeCoffee from './components/BuyMeCoffee';
import BlogPost from './components/BlogPost';

export default function App() {
  const { avatar, skills, contact, faq } = db;
  const posts = blog.posts.map((post) => {
    return post;
  });
  posts.reverse();

  return (
    <div id='top' className='container'>
      <header className='header' role='banner'>
        <Link id='home' to='/'>
          <img src='logo.svg' alt='logo' />
        </Link>
        <Navbar />
      </header>
      <SideMenu />
      <Routes>
        <Route path='/' element={<Home {...db} />} />
        <Route path='about' element={<About avatar={avatar} skills={skills} />} />
        <Route path='faq' element={<Faqs faq={faq} />} />
        <Route path='contact' element={<Contact contact={contact} />} />
        <Route path='blog' element={<Blog posts={posts} />} />

        {posts.map((post, index) => {
          return (
            <Route
              key={index}
              path={`blog/${post.slug}`}
              element={
                <main>
                  <section className='hero' tabIndex='0'>
                    <div className='content'>
                      <h2 className='title'>
                        <Link to='/blog/'>Tech Blog</Link>
                      </h2>
                    </div>
                  </section>
                  <BlogPost {...post} />
                </main>
              }
            />
          );
        })}
      </Routes>
      <section className='about' tabIndex='0'>
        <div className='scrolltop'>
          <a href='#top'>scroll up</a>
        </div>
      </section>
      <footer className='split'>
        <div>
          <h4>Support the channel</h4>
          <BuyMeCoffee />
        </div>
        <div>
          <h4>Connect</h4>
          <Socials />
        </div>
      </footer>
    </div>
  );
}
