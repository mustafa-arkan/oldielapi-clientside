import React from 'react';



import Banner from './Banner/Banner';
import PhoneCategories from './PhoneCategories/PhoneCategories';
import Services from './Services/Services';



const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
            <PhoneCategories></PhoneCategories> 
           <Services></Services>
           
          
         
        </div>
    );
};

export default Home;