import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';
import useMenu from '../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className='mb-12'>
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} >
            </SectionTitle>

            <div className='grid md:grid-cols-2 gap-8 mt-6'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='flex justify-center items-center'><button className="btn btn-outline border-0 border-b-4 text-slate-600 mt-4">View Full Menu</button></div>
            

        </section>
    );
};

export default PopularMenu;