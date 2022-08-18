import React from 'react'


const Pred = ({img}) => {
  return (
    <div className="card text-center">
  <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
  <p className="card-text">

<p className=''>Gray Shirt</p>
<p className='fw-bolder fs-5 '>$ 44.99</p>
<button type='button' className='btn border-1 border-dark my-2 py-2 px-4 mx-2'>Add To Cart</button>

</p>  </div>
</div>
  )
}

export default Pred