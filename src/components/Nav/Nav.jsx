import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styles from './Nav.module.css';
import Home from '../../pages/Home/Home.jsx';
import Join from '../../pages/Join/Join.jsx';
// import Login from '../../pages/Login';
// import CreatePost from '../../pages/CreatePost';
// const Home = () => {
//   return (
//     <>
//       <h2>Home</h2>
//       Home...
//     </>
//   );
// };
/* 아래 코드를 대신할 파일을 import처리 후 삭제해주세요. */
const Login = () => {
  return (
    <>
      <h2>Login</h2>
      Login...
    </>
  );
};
// const Join = () => {
//   return (
//     <>
//       <h2>Join</h2>
//       Join...
//     </>
//   );
// };
const CreatePost = () => {
  return (
    <>
      <h2>CreatePost</h2>
      CreatePost...
    </>
  );
};

/* ***************************************************** */

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
            <li className={styles.nav__list__item}>
              <Link className={styles.nav__link} to="/">
                Home
              </Link>
            </li>
            <li className={styles.nav__list__item}>
              <Link className={styles.nav__link} to="/login">
                Login
              </Link>
            </li>
            <li className={styles.nav__list__item}>
              <Link className={styles.nav__link} to="/join">
                Join
              </Link>
            </li>
            <li className={styles.nav__list__item}>
              <Link className={styles.nav__link} to="/write">
                CreatePost
              </Link>
            </li>
          </ul>
        </div>

        <Routes>
          {/* Route 태그를 Routes태그로 감싸지 않고 사용할 경우 에러 발생.(리액트 라우터
        v6부터) */}
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/join" element={<Join />} />

          <Route path="/write" element={<CreatePost />} />
        </Routes>
      </Router>
    </>
  );
}

export default RouterNav;
