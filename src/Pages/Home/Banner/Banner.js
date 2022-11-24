import React from 'react';

import lapban from '../../../assets/images/laptopbanner.jpeg'


const Banner = () => {
    return (

<div className="hero  ">

  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={lapban} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='' />
    <div>
      <h1 className="text-5xl font-bold">Wanna buy/sell your old laptop?</h1>
      <p className="py-6">Nothing to worry!! OldieLapi is here!Here thousand of buyer & seller can meet each others. </p>
      
    </div>
  </div>
</div>
 
    );
};

export default Banner;