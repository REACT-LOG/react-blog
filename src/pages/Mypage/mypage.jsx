import React, { useEffect, useState } from 'react';
import BlogList from '../Home/bloglist/BlogList';
import style from './mypage.module.css';
import store from '../../utils/store';

const MyPage = ({ posts }) => {
  console.log(posts);
  const [mode, setMode] = useState(false);
  const user = store.getData('logedInUser');
  const myPosts = posts.filter((post) => post.author === user.id);

  useEffect(() => {
    myPosts.length === 0 && setMode(true);
  }, [myPosts.length]);

  return (
    <div className={style.container}>
      {mode ? (
        <h3>"아직 작성한 글이 없습니다."</h3>
      ) : (
        <BlogList posts={myPosts} />
      )}
    </div>
  );
};

export default MyPage;
