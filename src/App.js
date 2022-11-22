import React from 'react';
import './App.css';
import RouterNav from './components/Nav/Nav.jsx';

function App() {
  console.log(process.env.REACT_APP_PORT);
  return (
    <div className="App">
      <header className="App-header"></header>
      <RouterNav />
    </div>
  );
}

export default App;
