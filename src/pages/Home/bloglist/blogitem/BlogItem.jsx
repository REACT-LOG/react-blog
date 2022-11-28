import React from 'react';
import { Link } from 'react-router-dom';
import "./blogItem.css"

const BlogItem = ({blog:{
    id,
    description,
    title,
    img,
    createdAt,
    author,
    catecory,
}}) => {
  return <div className='blogItem-wrap'>
    <img className='blogItem-cover' src={img} alt="이미지" />
    <div className='catecory'>{catecory}</div>
    <h3>{title}</h3>
    <p className='blogItem-desc'>{description}</p>

    <footer>
        <div className='blogItem-author'>
            <h6>{author}</h6>
            <p>{createdAt}</p>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
    </footer>
  </div>;
};

export default BlogItem;
