import React,{useState} from 'react';
import BlogList from './bloglist/BlogList';
import { data } from "./config/data"

const Home = () => {
  const [blog, setBlog] = useState(data);

  return <div>
    <h1>Blog</h1>
    <BlogList blogs={blog}/>
  </div>;
};

export default Home;
