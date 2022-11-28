import React, { useRef } from 'react';
import styles from './Login.module.css';
import Home from '../../pages/Home/Home.jsx';
import { Link } from 'react-router-dom';

const Join = () => {
  const formRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email.length === 0 || password === 0) {
      return;
    }

    const formData = { email, password };
    //회원정보 객체를 json데이터로 변환하여 로컬스토리지에 저장
    setArrayInLocalstorage('member', formData);

    //form 입력칸 초기화
    formRef.current.reset();
    alert('로그인 되었습니다.');
  };

  // localstorage에 Data set
  function setArrayInLocalstorage(key, formData) {
    const value = JSON.stringify(formData);
    var str = localStorage.getItem(key);
    var obj = {};
    try {
      obj = JSON.parse(str);
    } catch {
      obj = {};
    }
    if (!obj) {
      obj = {};
      obj[key] = [];
    }
    obj[key].push(value);
    localStorage.setItem(key, JSON.stringify(obj));
  }
  return (
    <>
      <div className={styles.join__container}>
        <form
          className={styles.form__container}
          onSubmit={submitHandler}
          ref={formRef}
        >
          <fieldset className={styles.fieldset__container}>
            <label className={styles.label__container} htmlFor="email">
              이메일
            </label>
            <input
              className={styles.input__container}
              type="email"
              placeholder="example@abc.com"
              required
              ref={emailRef}
              id="email"
              name="email"
            />
          </fieldset>
          <fieldset className={styles.fieldset__container}>
            <label className={styles.label__container} htmlFor="password">
              비밀번호
            </label>
            <input
              className={styles.input__container}
              required
              ref={passwordRef}
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </fieldset>
          <button className={styles.button__container} type="submit">
            <Link to="/home">로그인</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Join;
