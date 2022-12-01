import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import RouterNav from './components/Nav/Nav.jsx';
import Home from './pages/Home/Home';
import Join from './pages/Join/Join';
import Post from './pages/Post/Post';
import Login from './pages/Login/Login';
//Mypage 화면 생성 시 아래 코드는 주석해제 해주세요.
import Mypage from './pages/Mypage/mypage';
import Write from './pages/Write/Write';
import store from './utils/store';

function App() {
  const postList = useRef([]);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (post) => (e) => {
    postList.current = [post, ...postList.current];
    store.setData('posts', postList.current);
    setPosts([...postList.current]);
    store.removeStore('current_post');
  };

  const handleRemove = (id) => (e) => {
    const filtered = posts.filter((post) => post.id !== Number(id));
    postList.current = filtered;
    store.setData('posts', postList.current);
    setPosts(filtered);
    navigate('/', { replace: true });
  };

  const handleUpdate = (id, updateData) => (e) => {
    const updatePost = postList.current.map((post) =>
      post.id === Number(id) ? { ...updateData } : post,
    );

    postList.current = updatePost;
    store.setData('posts', postList.current);
    setPosts(updatePost);
    navigate(`/post/${id}`, { replace: true });
  };

  useEffect(() => {
    const postData = store.getData('posts');

    if (!postData) {
      store.setData('posts', []);
    }

    postList.current = postData;
    setPosts([...postList.current]);
  }, []);

  return (
    <div className="App">
      <RouterNav />
      <Routes>
        {/* Route 태그를 Routes태그로 감싸지 않고 사용할 경우 에러 발생.(리액트 라우터
        v6부터) */}
        <Route path="/" element={<Home posts={posts} />} />

        <Route path="/login" element={<Login />} />

        <Route path="/mypage" element={<Mypage posts={posts} />} />

        <Route path="/join" element={<Join />} />

        <Route
          path="/write"
          element={<Write onSubmit={handleSubmit} onUpdate={handleUpdate} />}
        >
          <Route
            path=":postId"
            element={<Write onSubmit={handleUpdate} onUpdate={handleUpdate} />}
          />
        </Route>

        <Route
          path="/post/:id"
          element={<Post posts={posts} onRemove={handleRemove} />}
        />
      </Routes>
    </div>
  );
}

export default App;
