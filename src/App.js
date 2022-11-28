import React, { useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RouterNav from './components/Nav/Nav.jsx';
import Home from './pages/Home/Home';
import Join from './pages/Join/Join';
import Write from './pages/Write/Write';

/* 아래 코드를 대신할 파일을 import처리 후 삭제해주세요. */
const Login = () => {
  return (
    <>
      <h2>Login</h2>
      Login...
    </>
  );
};

function App() {
  const editorRef = useRef();
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    setContent(e);
  };

  return (
    <div className="App">
      <RouterNav />
      <Routes>
        {/* Route 태그를 Routes태그로 감싸지 않고 사용할 경우 에러 발생.(리액트 라우터
        v6부터) */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/join" element={<Join />} />

        <Route
          path="/write"
          element={
            <Write
              editorRef={editorRef}
              content={content}
              onSubmit={handleSubmit}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
