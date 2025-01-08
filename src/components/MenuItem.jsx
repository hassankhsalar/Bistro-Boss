import React from 'react';

const MenuItem = ({item}) => {
    const {image, price, recipe, name } = item;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius: '0px 200px 200px 200px'}} className='w-[90px]' src={image} alt={name} />
            <div>
                <h3 className='uppercase'>{name}-------</h3>
                <p className=''>{recipe}</p>
            </div>
            <p className='text-yellow-400'>${price}</p>
        </div>
    );
};

export default MenuItem;