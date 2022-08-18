import React from 'react'
import Header from './Utility/Header'

const Email = () => {
  return (
    <div className='email'>
    <div className='container'>
        <div className='text-center d-flex justify-content-center'>
        <div className='col-lg-7 '>
            <Header title={'Newsletter Subscription'} />
            <h6 className='text-black-50 pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem officia accusantium maiores quisquam dolorum?</h6>
        
            <div class="input-group mb-3 my-4 mb-5">
                <input type="text" class="input form-control" placeholder="Enter your Email ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn1 py-2" type="button" id="button-addon2">Subscribe</button>
            </div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Email