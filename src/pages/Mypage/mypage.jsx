import React from 'react';
import BlogList from '../Home/bloglist/BlogList';
import style from "./mypage.module.css"
import store from '../../utils/store';

const MyPage = ({posts}) => {
  const user = store.getData("logedInUser")
  const empty = [];
  posts.filter(post => post.author === user.id ? empty.push(post) : <h3>"아직 작성한 글이 없습니다."</h3>)
  return (
    <div className={style.container}>
      <BlogList posts={empty}/>
    </div>
  );
};

export default MyPage;
