import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Nav = () => {
  return (
    <>
      <h2>Nav</h2>
      Nav...
    </>
  );
};
const Login = () => {
  return (
    <>
      <h2>Login</h2>
      Login...
    </>
  );
};
const Join = () => {
  return (
    <>
      <h2>Join</h2>
      Join...
    </>
  );
};
const CreatePost = () => {
  return (
    <>
      <h2>CreatePost</h2>
      CreatePost...
    </>
  );
};
function RouterNav() {
  return (
    <>
      <h1>React Router DOM example</h1>
      <ul>
        <li>
          <a href="/">Nav</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/join">Join</a>
        </li>
        <li>
          <a href="/crate-post">CreatePost</a>
        </li>
      </ul>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/join" element={<Join />}></Route>

          <Route path="/crate-post" element={<CreatePost />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default RouterNav;
