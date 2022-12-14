import React, { useRef, useEffect } from 'react';
import styles from './Join.module.css';
import store from '../../utils/store';
import { setArrayInLocalstorage } from '../../utils/localstorageStore';
const Join = () => {
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    let id = 1;
    if (name.length === 0 || email.length === 0 || password === 0) {
      return;
    }
    if (confirmPassword !== password) {
      confirmPassword.current.setCustomValidity('비밀번호가 다릅니다.');
      return;
    }

    const memberData = store.getData('member');
    if (memberData) {
      const getDataArray = memberData.member;
      console.log(getDataArray);
      if (getDataArray.length > 0) {
        id = getDataArray.length + 1;
      }
    }

    const formData = { id, name, email, password };
    //회원정보 객체를 json데이터로 변환하여 로컬스토리지에 저장
    setArrayInLocalstorage('member', formData);

    //form 입력칸 초기화
    formRef.current.reset();
    alert('회원 가입이 완료되었습니다.');
    // window.location.replace('/login');
  };

  return (
    <>
      <div className={styles.join__container}>
        <form
          className={styles.form__container}
          onSubmit={submitHandler}
          ref={formRef}
        >
          <fieldset className={styles.fieldset__container}>
            <label className={styles.label__container} htmlFor="name">
              이름
            </label>
            <input
              className={styles.input__container}
              type="text"
              placeholder="홍길동"
              required
              ref={nameRef}
              id="name"
              name="name"
            />
          </fieldset>
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
          <fieldset className={styles.fieldset__container}>
            <label
              className={styles.label__container}
              htmlFor="confirmPassword"
            >
              비밀번호 확인
            </label>
            <input
              className={styles.input__container}
              required
              ref={confirmPasswordRef}
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="비밀번호를 다시 입력해주세요."
            />
          </fieldset>

          <button className={styles.button__container} type="submit">
            가입하기
          </button>
        </form>
      </div>
    </>
  );
};

export default Join;
