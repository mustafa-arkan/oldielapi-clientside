import React from 'react';
import { Link } from 'react-router-dom';

const LaptopCategory = ({ brand }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full mx-auto">
        <img
          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          src={brand.image}
          alt=""
        />

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          

          <div className="flex items-center justify-center px-3  bg-orange-600 dark:bg-gray-700">
            <Link
              to={`/brands/${brand.brand}`}
              className="px-3 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
            >
              Explore All {brand.brand} Laptop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopCategory;
