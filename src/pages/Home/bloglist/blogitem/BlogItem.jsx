import React from 'react';
import { Link } from 'react-router-dom';
import style from "./blogItem.module.css"

const BlogItem = ({blog:{
    id,
    description,
    title,
    img,
    createdAt,
    author,
    catecory,
}}) => {
  return <div className={style.blogItem}>
    <Link to={`/blog/${id}`}>
    <img className={style.cover} src={img} alt="이미지" />
    </Link>
    <div className={style.cate}>{catecory}</div>
    <h3>{title}</h3>
    <p className={style.desc}>{description}</p>

    <footer>
        <div className={style.author}>
            <h6>{author}</h6>
            <p>{createdAt}</p>
        </div>
    </footer>
    
    </div>
};

export default BlogItem;
