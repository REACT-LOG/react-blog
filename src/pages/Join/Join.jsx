import React, { useRef } from 'react';
import RouterNav from '../../components/Nav';

export default Join = () => {
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (name.length === 0 || email.length === 0 || password === 0) {
      return;
    }
    if (confirmPassword !== password) {
      confirmPassword.current.setCustomValidity('비밀번호가 다릅니다.');
      return;
    }
    const formData = {
      name,
      email,
      password,
    };
    //회원정보 객체를 json데이터로 변환하여 로컬스토리지에 저장
    postLocalStorage(formData);
    //form 입력칸 초기화
    formRef.current.reset();
    alert('회원 가입이 완료되었습니다.');
  };
  const postLocalStorage = (formData) => {
    const jsonFormData = JSON.stringify(formData);
    localStorage.setItem('member', jsonFormData);
  };
  return (
    <>
      <RouterNav></RouterNav>
      <div className="join__container">
        <form onSubmit={submitHandler} ref={formRef}>
          <fieldset>
            <label htmlFor="name">이름</label>
            <input
              type="text"
              placeholder="홍길동"
              required
              ref={nameRef}
              id="name"
              name="name"
            />
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              placeholder="example@abc.com"
              required
              ref={emailRef}
              id="email"
              name="email"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="password">비밀번호</label>
            <input
              required
              ref={passwordRef}
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </fieldset>

          <fieldset>
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              required
              ref={confirmPasswordRef}
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="비밀번호를 다시 입력해주세요."
            />
          </fieldset>
          <RegisterButton type="submit">가입하기</RegisterButton>
        </form>
      </div>
    </>
  );
};
