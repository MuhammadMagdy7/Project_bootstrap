import React from 'react'
import Blog from './Utility/Blog';
import img from '../assets/imgs/blog_1.jpg'
import img1 from '../assets/imgs/blog_2.jpg'
import img2 from '../assets/imgs/blog_3.jpg'

const BlogList = () => {
  return (
    <div className='container'>
    <div className='row'>

    <Blog img={img} />
    <Blog img={img1}/>
    <Blog img={img2}/>
    </div>
    </div>
  )
}

export default BlogList