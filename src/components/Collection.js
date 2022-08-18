import React from 'react'
import Card from './Utility/Card'
import img1 from '../assets/imgs/c_polo-shirt.png'
import img2 from '../assets/imgs/c_formal_gray_shirt.png'
import img3 from '../assets/imgs/c_pant_girl.png'
import img4 from '../assets/imgs/c_shirt-girl.png'
import img5 from '../assets/imgs/c_t-shirt_men.png'
import img6 from '../assets/imgs/c_tunic-shirt_girl.png'
import img7 from '../assets/imgs/c_undershirt.png'
import img8 from '../assets/imgs/c_western-shirt.png'

const Collection = () => {
  return (
    <div className='container pb-4'>

        <div className='list-collect d-flex flex-wrap justify-content-center my-5'>
            <button type='button' className='btn border-1 border-dark my-2 py-2 px-4 mx-2 active'>All</button>
            <button type='button' className='btn border-1 border-dark my-2 py-2 px-4 mx-2'>Best Sellers</button>
            <button type='button' className='btn border-1 border-dark my-2 py-2 px-4 mx-2'>Featured</button>
            <button type='button' className='btn border-1 border-dark my-2 py-2 px-4 mx-2'>New Arrival</button>
        </div>


        <div className='row'>
            <div className='col-lg-3 '>
                <Card title={'Gray shirt'} price={'$ 45.00'} img={img1} rate={'4'} />
           </div>
           <div className='col-lg-3 '>
                <Card title={'Gray shirt'} price={'$ 45.00'} img={img2} rate={'4'} />
           </div>
           <div className='col-lg-3 '>
                <Card title={'Gray shirt'} price={'$ 45.00'} img={img3} rate={'4'} />
           </div>
           <div className='col-lg-3 '>
                <Card title={'Gray shirt'} price={'$ 45.00'} img={img4} rate={'4'} />
           </div>
           <div className='col-lg-3 '>
                <Card title={'Gray shirt'} price={'$ 45.00'} img={img5} rate={'4'} />
           </div>
           <div className='col-lg-3 '>
                <Card title={'Gray shirt'} price={'$ 45.00'} img={img6} rate={'4'} />
           </div>
           <div className='col-lg-3 '>
                <Card title={'Gray shirt'} price={'$ 45.00'} img={img7} rate={'4'} />
           </div>
           <div className='col-lg-3 '>
                <Card title={'Gray shirt'} price={'$ 45.00'} img={img8} rate={'4'} />
           </div>
            
                
        </div>
    </div>
  )
}

export default Collection