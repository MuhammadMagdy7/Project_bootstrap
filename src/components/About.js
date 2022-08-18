import React from 'react'
import Header from './Utility/Header'
import img from '../assets/imgs/about_us.jpg'

const About = () => {
  return (
    <div className='about'>
      
        <div className='container py-5 my-5'>
            <div className='row'>            
                <div className='col-lg-6'>
                <img src={img} className="w-100" />                
            </div>
            <div className='col-lg-6'>
                <Header title={'About Us'}/>
                <p className='text-black-50 fs-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsam.</p>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga blanditiis, modi exercitationem quae quam eveniet! Minus labore voluptatibus corporis recusandae accusantium velit, nemo, nobis, nulla ullam pariatur totam quos.</p>
            </div>
        </div>
        </div>


        

    </div>
  )
}

export default About