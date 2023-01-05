import React from 'react';
import Footer from "./Components/Footer";
import UgoImg1 from './Components/UgoImg1';
import "./blog.css"
import Posts from './Components/posts/Posts';


const Blog = () => {
  return (
    <div className='blog'>
    
      <UgoImg1 heading="BLOG." text="CURRENTLY UNAVAILABLE. "
  My thoughts on programming development and everything
      
     
       />
     <Posts />
     <Posts />
     <Posts />
     <Posts />
      <Footer />
    </div>
  )
}

export default Blog