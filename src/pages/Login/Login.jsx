import React, { useEffect, useRef } from 'react';
import styles from './Login.module.css';
import store from '../../utils/store';
const Login = () => {
  const formRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const key = 'member';
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email.length === 0 || password === 0) {
      return;
    }

    const formData = { email, password };
    //회원정보 객체를 json데이터로 변환하여 로컬스토리지에 저장
    const result = getArrayInLocalstorage(key, formData);
    // 반환된 배열에 true 포함되었는지 확인하는 변수
    const loginResult = result.includes(true);
    if (loginResult) {
      //form 입력칸 초기화
      formRef.current.reset();
      alert('로그인 되었습니다.');
      window.location.replace('/');
    } else {
      alert('아이디, 비밀번호를 확인해주세요.');
    }
  };

  // localstorage에서 Data get
  function getArrayInLocalstorage(key, formData) {
    const localStorageData = store.getData(key);
    const array = localStorageData.member;
    // Localstorage의 email, password 값과 일치해야만 ture값 반환 --> 배열로 정의, 리턴
    const validate = array.map((data) => {
      let parsedData = JSON.parse(data);
      if (
        parsedData.email === formData.email &&
        parsedData.password === formData.password
      ) {
        return true;
      }
    });
    return validate;
  }
  return (
    <>
      <div className={styles.login__container}>
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
            로그인
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
