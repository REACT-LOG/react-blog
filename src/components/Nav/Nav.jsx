import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styles from './Nav.module.css';
const Home = () => {
  return (
    <>
      <h2>Home</h2>
      Home...
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
      {/* Router 태그로 감싸지 않고 사용할 경우 에러 발생.(리액트 라우터
        v6부터) */}
      <Router>
        {/* Link 태그를 Router태그 밖에서 사용할 경우 에러 발생.(리액트 라우터
        v6부터) */}
        <div className={styles.nav__container}>
          <h1>React Blog</h1>
          <ul className={styles.nav__list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/join">Join</Link>
            </li>
            <li>
              <Link to="/crate-post">CreatePost</Link>
            </li>
          </ul>
          <Routes>
            {/* Route 태그를 Routes태그로 감싸지 않고 사용할 경우 에러 발생.(리액트 라우터
        v6부터) */}
            <Route path="/" element={<Home />}></Route>

            <Route path="/login" element={<Login />}></Route>

            <Route path="/join" element={<Join />}></Route>

            <Route path="/crate-post" element={<CreatePost />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default RouterNav;
