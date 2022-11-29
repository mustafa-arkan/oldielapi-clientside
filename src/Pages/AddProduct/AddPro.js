import React from 'react';
import { Link } from 'react-router-dom';

const AddPro = ({user}) => {
    return (
    
<div>
      <div className="flex flex-col items-center justify-center w-full mx-auto">
      <div className="flex flex-col items-center justify-center w-full mx-auto">
          <img
             className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            src={user.image}
            alt=""
      />
</div>
        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-3 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            Id:{user._id}
          </h3>

          <h3 className="py-3 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            Location:dhaka 
          </h3>

<div className=''>

<h3 className="py-3 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            Usage:{user.resale}2Y  
          </h3>

          <h3 className="py-3 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            Seller Name:{user.seller}abul  
          </h3>



</div>


<div className=''>

<h3 className="py-3 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            Original Price:{user.original_price}100000  
          </h3>

          <h3 className="py-3 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            Resale price:{user.seller} 200000 
          </h3>
          


</div>




          <div className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <label



              htmlFor="book-modal"
              className="px-3 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
            >
             Buy Now
            </label>
          </div>
        </div>
      </div>
    </div>





    );
};

export default AddPro;