import React from 'react';
import { Link } from 'react-router-dom';
import style from "./blogItem.module.css"

const BlogItem = ({posts:{
    id,
    content,
    title,
    author,
}}) => {
  return <div className={style.blogItem}>
    <Link to={`/post/${id}`} style={{textDecoration : "none"}}>
    <h3 style={{color: "black"}}>{title}</h3>
    <p className={style.desc} style={{color: "#a9a9a9"}}>{content}</p>
  </Link>
    <footer>
        <div className={style.author}>
            <h6>{author}</h6>
        </div>
    </footer>
    
    </div>
};

export default BlogItem;
