import React from 'react';
import bimage from '../assets/home/chef-service.jpg'
const BBBanner = () => {
    return (
        <div>
            <img src={bimage} alt="" />
            <div className='bg-white text-black -mt-40  mb-24 text-center opacity-80 w-5/12 mx-auto'>
            <h3 className='text-4xl'>Bistro Boss</h3>
            <p>Habi Jabi dum dum pum pum </p>
            </div>
        </div>
    );
};

export default BBBanner;