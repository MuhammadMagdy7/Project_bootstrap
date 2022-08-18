import React from 'react'

const Blog = ({img}) => {
  return (
    <div className="col-lg-4 card py-2" >
    <img src={img} className="card-img-top w-100" alt="..." />
    <div className="card-body">
      <p className="card-text">

          <h4 className='pb-3 lh-4'>Lorem ipsum, dolor sit amet consectetur adipisicing</h4>
          
          <p className=' text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.</p>
          <p className='text-black-50'><span className='fw-bold text-black'>Author:</span> John Doe</p>
      
          <button type='button' className='btn border-1 border-dark my-2 py-2 px-4 mx-2'>Read More</button>

      </p>
    </div>
  </div>
  )
}

export default Blog