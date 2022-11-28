import React from 'react';
import './App.css';
import Home from "./pages/Home/Home";

function App() {
  console.log(process.env.REACT_APP_PORT);
  return (
    <div className="App">
      <header className="App-header"></header>
      <Home></Home>
    </div>
  );
}

export default App;
