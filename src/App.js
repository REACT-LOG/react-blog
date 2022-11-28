import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import Write from './pages/Write/Write';
import './App.css';
import RouterNav from './components/Nav/Nav.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <RouterNav />
    </div>
  );
}

export default App;
