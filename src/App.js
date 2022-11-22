import React from 'react';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_PORT);
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
