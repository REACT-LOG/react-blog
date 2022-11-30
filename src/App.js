import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RouterNav from './components/Nav/Nav.jsx';
import Home from './pages/Home/Home';
import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
//Mypage 화면 생성 시 아래 코드는 주석해제 해주세요.
// import Mypage from './pages/Mypage/Mypage';
import Write from './pages/Write/Write';

function App() {
  //Mypage 화면 생성 시 아래 코드는 삭제해주세요.
  //-----------------------------------------------------
  const Mypage = () => {
    return <div>MyPage입니다.</div>;
  };
  //-----------------------------------------------------
  return (
    <div className="App">
      <RouterNav />
      <Routes>
        {/* Route 태그를 Routes태그로 감싸지 않고 사용할 경우 에러 발생.(리액트 라우터
        v6부터) */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/mypage" element={<Mypage />} />

        <Route path="/join" element={<Join />} />

        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  );
}

export default App;
