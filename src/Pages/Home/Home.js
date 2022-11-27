import React from 'react';



import Banner from './Banner/Banner';
import LaptopCategories from './LaptopCategories/LaptopCategories';

import Services from './Services/Services';



const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
            
           <LaptopCategories></LaptopCategories>
           <Services></Services>
           
          
         
        </div>
    );
};

export default Home;