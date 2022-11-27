import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from './BookModal/BookModal';


import Phone from './Phone';




const Phones = () => {
  const phones = useLoaderData();
  console.log(phones);

  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
          Explore & Buy Now
        </h1>

        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 my-6">
        {phones.map((phone) => (
          <Phone key={phone._id} phone={phone}></Phone>



        ))}
      </div>
      <BookModal></BookModal>
    </div>
  );
};

export default Phones;
