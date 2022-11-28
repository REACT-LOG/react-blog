import React from 'react';
import BlogItem from './blogitem/BlogItem';
import "./BlogList.css"

const BlogList = ({blogs}) => {
  return <div className='blogList-Wrap'>
        {blogs.map(blog => <BlogItem blog={blog} key={blog.id}/>)}
  </div>;
};

export default BlogList;
