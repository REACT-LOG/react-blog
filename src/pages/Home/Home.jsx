import React, { useState } from 'react';
import BlogList from './bloglist/BlogList';
import { data } from './config/data';

const Home = ({ posts }) => {
  const [blog, setBlog] = useState(data);

  return (
    <div>
      {/* <BlogList blogs={blog} /> */}
      {posts.map((e) => (
        <li key={e.id}>{e.title}</li>
      ))}
    </div>
  );
};

export default Home;
