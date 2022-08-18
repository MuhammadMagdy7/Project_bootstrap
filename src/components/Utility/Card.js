import React from 'react'

const Card = ({img, title, rate, price}) => {
  return (
    <div className="card text-center py-2" >
  <img src={img} className="card-img-top w-100" alt="..." />
  <div className="card-body">
    <p className="card-text">

        <small>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
        </small>

        <p className=''>{title}</p>
        <small className='fw-bolder fs-5'>{price}</small>

    </p>
  </div>
</div>
  )
}

export default Card