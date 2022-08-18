import React from 'react'
import Header from './Utility/Header'
import rated1 from '../assets/imgs/top_rated_1.jpg'
import rated2 from '../assets/imgs/top_rated_2.jpg'
import rated3 from '../assets/imgs/top_rated_3.jpg'

import best1 from '../assets/imgs/best_selling_1.jpg'
import best2 from '../assets/imgs/best_selling_2.jpg'
import best3 from '../assets/imgs/best_selling_3.jpg'


import sale1 from '../assets/imgs/on_sale_1.jpg'
import sale2 from '../assets/imgs/on_sale_2.jpg'
import sale3 from '../assets/imgs/on_sale_3.jpg'






const Popular = () => {
  return (
    <div className='container pb-4'>
        <div className='pb-5'>
        <Header title={'Popular Of This Year'} />
        </div>
        <div className='row'>
            <div className='col-lg-4'>
                <h4 className='text-black-50 pb-4'>
                    Top Rated

                </h4>
                <div class="card mb-3 ">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={rated1} class="img-fluid rounded-start w-75" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">Blue Shirt</h6>
                            <p class="card-text">$ 20.00 </p>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3 ">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={rated2} class="img-fluid rounded-start w-75" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">Blue Shirt</h6>
                            <p class="card-text">$ 20.00 </p>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3 ">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={rated3} class="img-fluid rounded-start w-75" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">Blue Shirt</h6>
                            <p class="card-text">$ 20.00 </p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='col-lg-4'>
                <h4 className='text-black-50 pb-4'>
                    Best Selling

                </h4>
                <div class="card mb-3 ">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={best1} class="img-fluid rounded-start w-75" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">Blue Shirt</h6>
                            <p class="card-text">$ 20.00 </p>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3 ">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={best2} class="img-fluid rounded-start w-75" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">Blue Shirt</h6>
                            <p class="card-text">$ 20.00 </p>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3 ">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={best3} class="img-fluid rounded-start w-75" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">Blue Shirt</h6>
                            <p class="card-text">$ 20.00 </p>
                        </div>
                        </div>
                    </div>
                </div>




            </div>
            <div className='col-lg-4'>
                <h4 className='text-black-50 pb-4'>
                    On Sale

                </h4>

                <div class="card mb-3 ">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={sale1} class="img-fluid rounded-start w-75" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">Blue Shirt</h6>
                            <p class="card-text">$ 20.00 </p>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3 ">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={sale2} class="img-fluid rounded-start w-75" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">Blue Shirt</h6>
                            <p class="card-text">$ 20.00 </p>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3 ">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={sale3} class="img-fluid rounded-start w-75" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">Blue Shirt</h6>
                            <p class="card-text">$ 20.00 </p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>
  )
}

export default Popular