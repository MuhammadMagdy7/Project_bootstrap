import React from "react";



function Slider() {
  return (

//   <header id="header" className="vh-100">
//     <div className="container">
//       <h1 className="text-uppercase text-white">Hello world</h1>
// </div>
  // </header>

<div id="header" className="carousel slide vh-100" 
data-bs-ride="carousel">
  <div className="container h-100 d-flex align-items-center">

  <div className="carousel-inner text-center">
    <div className="carousel-item active">
      <p className="text-uppercase text-white d-block fs-4">Best Collection</p>
      <h2 className="text-uppercase text-white">New Arrivals</h2>
      <a href="#" className="btn text-uppercase ">Shop now</a>
    </div>
    <div className="carousel-item">
    <p className="text-uppercase text-white d-block fs-4">Best Price & Offer</p>
      <h2 className="text-uppercase text-white">New season</h2>
      <a href="#" className="btn text-uppercase ">Buy now</a>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#header" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#header" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
</div>



    
    
  );
}

export default Slider;