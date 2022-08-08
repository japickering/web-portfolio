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
  const { about, author, avatar, skills, faq, socials } = db;
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
        <Route path='about' element={<About about={about} author={author} avatar={avatar} skills={skills} />} />
        <Route path='faq' element={<Faqs faq={faq} />} />
        <Route path='contact' element={<Contact socials={socials} />} />
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
                        <Link to='/blog/'>Back to Blog</Link>
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
      <footer className='split'>
        <div>
          <h4>Support the channel</h4>
          <BuyMeCoffee link='https://www.buymeacoffee.com/uRPIo7n' />
        </div>
        <div>
          <Socials socials={socials} />
        </div>
      </footer>
      <div className='circle-top'>
        <a href='#top'>back to top</a>
      </div>
    </div>
  );
}
