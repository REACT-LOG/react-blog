import React from 'react';
import BlogList from '../Home/bloglist/BlogList';
import style from "./mypage.module.css"

const MyPage = (prop) => {

  return (
    <div className={style.container}>
      <div>
        <BlogList posts={prop.posts}/>
      </div>
    </div>
  );
};

export default MyPage;
