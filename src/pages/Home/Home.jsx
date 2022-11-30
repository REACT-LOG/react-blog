import React from 'react';
import BlogList from './bloglist/BlogList';

const Home = (prop) => {

  return (
    <div>
      <BlogList posts={prop.posts} />
    </div>
  );
};

export default Home;
