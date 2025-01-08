import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center w-4/12 mx-auto'>
            <p className='text-yellow-600'>---{heading}---</p>
            <h3 className='text-3xl uppercase border-y-4 py-4'>{subHeading}</h3>
            
        </div>
    );
};

export default SectionTitle;