import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AddPro from './AddPro';

const MyProduct = () => {

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/addproducts');
            const data = await res.json();
            return data;
        }
    });


    return (
        <div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
            Laptop Categories
          </h1>
  
          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Explore different categories of brand's laptop!
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 my-6">
          {users.map((user) => (
            <AddPro key={user._id} user={user}></AddPro>
          ))}
        </div>
      </div>
    );
};

export default MyProduct;