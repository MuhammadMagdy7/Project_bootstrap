import React from 'react'
import Pred from '../components/Utility/Pred';
import img1 from '../assets/imgs/special_product_1.jpg'
import img2 from '../assets/imgs/special_product_2.jpg'
import img3 from '../assets/imgs/special_product_3.jpg'
import img4 from '../assets/imgs/special_product_4.jpg'

const Special = () => {
  return (
    <>
    <div className='container'>
    <div className='row'>
        <div className='col-lg-3'>
        <Pred img = {img1} />
        </div>
        <div className='col-lg-3'>
        <Pred img = {img2} />
        </div>
        <div className='col-lg-3'>
        <Pred img = {img3}/>
        </div>
        <div className='col-lg-3'>
        <Pred img = {img4}/>
        </div>
    </div>
    
        
        </div>

    </>
  )
}

export default Special