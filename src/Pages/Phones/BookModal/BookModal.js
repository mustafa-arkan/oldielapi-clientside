import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BooksModal from './BooksModal';



const BookModal = () => {
    const { data: brands = [] } = useQuery({
        queryKey: ['brands'],
        queryFn: () =>
          fetch('http://localhost:5000/brands').then((res) => res.json()),
      });


    return (
        <div>



            
            {brands.map((brand) => (
          <BooksModal key={brand._id} brand={brand}></BooksModal>
        ))}






</div>

       
    );
};

export default BookModal;