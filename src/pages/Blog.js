import React from 'react';
import { Link } from 'react-router-dom';
import BlogListItem from '../components/BlogListItem';

export default function Blog({ posts }) {
  return (
    <main>
      <section className='hero' tabIndex='0'>
        <div className='content'>
          <h2 className='title'>
            <Link to='/blog/'>Blog</Link>
          </h2>
          <h3 className='subtitle'>Discover and get inspired</h3>
        </div>
      </section>
      {posts.map((post, index) => {
        return <BlogListItem key={index} {...post} />;
      })}
    </main>
  );
}
