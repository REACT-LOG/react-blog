import React from 'react';
import BlogItem from './blogitem/BlogItem';
import style from "./BlogList.module.css"

const BlogList = ({blogs}) => {
  return <div className={style.wrap}>
        {blogs.map(blog => <BlogItem blog={blog} key={blog.id}/>)}
  </div>;
};

export default BlogList;
