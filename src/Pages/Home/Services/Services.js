import React from 'react';
import phone from '../../../assets/images/phone.png'
import value from '../../../assets/images/value.png'
import support from '../../../assets/images/support.png'
import Service from '../Services/Service'

const Services = () => {


    const servicesData = [
        {
            id: 1,
            name: 'Great Value',
            description: 'We get you the best value for your money',
            img: value
        },
        {
            id: 2,
            name: '24/7 SUPPORT',
            description: 'We’re here to support you around the clock',
            img: support
        },
        {
            id: 3,
            name: 'privacy & Policy',
            description: 'Our privacy & policy will give you peace of mind',
            img: phone
        },
    ]


    return (
        <div className='mt-16'>
        <div className='text-center'>
            <h3 className='text-xl font-bold text-dark uppercase'>Our Supports </h3>
           
        </div>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                servicesData.map(service =><Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    </div>
    );
};

export default Services;