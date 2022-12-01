import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import store from '../../utils/store';
function RouterNav() {
  const key = 'logedInUser';
  const [isLogin, setIsLogin] = useState(false);
  const result = store.getData(key);
  useEffect(() => {
    if (result) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      {/* Link 태그를 Router태그 밖에서 사용할 경우 에러 발생.(리액트 라우터
        v6부터) */}
      <div className={styles.nav__container}>
        <h1>React Blog</h1>
        <ul className={styles.nav__list}>
          <li className={styles.nav__list__item}>
            <Link className={styles.nav__link} to="/post/1669834690027">
              post
            </Link>
          </li>
          <li className={styles.nav__list__item}>
            <Link className={styles.nav__link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.nav__list__item}>
            {isLogin ? (
              <Link
                className={styles.nav__link}
                to="/"
                onClick={() => {
                  store.removeStore(key);
                  setIsLogin(false);
                }}
              >
                Logout
              </Link>
            ) : (
              <Link className={styles.nav__link} to="/login">
                Login
              </Link>
            )}
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
    </>
  );
}

export default RouterNav;
