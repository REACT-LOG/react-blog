import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import Write from './pages/Write/Write';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/write">새 글 작성하기</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  );
}

export default App;
