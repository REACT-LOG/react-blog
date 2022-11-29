import React from 'react';

const Home = ({ posts }) => {
  return (
    <ul>
      {posts.map((e) => (
        <li key={e.id}>{e.title}</li>
      ))}
    </ul>
  );
};

export default Home;
