import React from 'react'

const Footer = () => {
  return (
    <div className='footer text-white'>
        <div className='container'>
            <div className='row py-5'>


                <div className='col-lg-3'>

                    <h5 className='pb-4 fw-light'><a href='#' className='title1'>ATTIRE</a></h5>
                    <p className='text-white-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia quisquam veniam odit cupiditate, ullam aut voluptas velit dolor ipsam?</p>


                </div>
                <div className='col-lg-3'>
                    <h5>Links</h5>
                    <ul className=' list-unstyled'>
                        <li className='py-2'>
                            <a href='#' className='title1'>
                            <i class="fas fa-angle-right pe-2"></i>
                            Home
                            </a>
                        </li>
                        <li className='py-2'>
                            <a href='#' className='title1'>
                            <i class="fas fa-angle-right pe-2"></i>
                            Collection
                            </a>
                        </li>
                        <li className='py-2'>
                            <a href='#' className='title1'>
                            <i class="fas fa-angle-right pe-2"></i>
                            Blogs
                            </a>
                        </li>
                        <li className='py-2'>
                            <a href='#' className='title1'>
                            <i class="fas fa-angle-right pe-2"></i>
                            About Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                    <h5>Contact Us</h5>
                    <div className='text-white-50'>

                    <div className='row pt-3'> 
                    <div className='col'>
                    <i class="fas fa-map-marked-alt fs-5 pt-2"></i></div>
                    <div className='col-10'>
                        <small>Albert Street, New York, AS 756, United States of America</small></div></div>
                        <div className='row pt-3'> 
                    <div className='col'>
                    <i class="fas fa-envelope fs-5"></i></div>
                    <div className='col-10'>
                        <p>attire.support@gmail.com</p></div></div>
                  
                        <div className='row '> 
                    <div className='col'>
                    <i class="fas fa-phone-alt"></i></div>
                    <div className='col-10'>
                        <p>+9786 6776 236</p></div></div>
                 

                    
                    
                    </div>
                </div>
                <div className='col-lg-3'>
                    <h5>Follow Us</h5>

                    <ul className='list-unstyled d-flex gap-3 fs-4 text-white-50'>
                        <li><i class="fab fa-facebook-f icon"></i></li>
                        <li><i class="fab fa-twitter icon"></i></li>
                        <li><i class="fab fa-instagram icon"></i></li>
                        <li><i class="fab fa-youtube icon"></i></li>
                    </ul>

                </div>



            </div>
        </div>
    </div>
  )
}

export default Footer