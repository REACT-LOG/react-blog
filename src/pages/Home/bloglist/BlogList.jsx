import React from 'react';
import BlogItem from '../../../components/blogitem/BlogItem';
import style from "./BlogList.module.css"

const BlogList = ({posts}) => {
  return <div className={style.wrap}>
        {posts.map(post => <BlogItem posts={post} key={post.id}/>)}
  </div>;
};

export default BlogList;
