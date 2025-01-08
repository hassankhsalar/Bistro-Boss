import React from 'react';
import SectionTitle from './SectionTitle';
import ftimg from '../assets/home/featured.jpg';
import '../components/Featured.css';
const Featured = () => {
    return (
        <div className='featured-item bg-fixed'>
            <SectionTitle heading={'Featured Item'} subHeading={'Check it out'}></SectionTitle>
        <div className='md:flex justify-center items-center py-8 px-16 text-slate-300 bg-slate-500 bg-opacity-30'>
            <div>
                <img src={ftimg} alt="" />
            </div>
            <div className='md: ml-10'>
                <p>Aug 2024</p>
                <p className='uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos recusandae deleniti sit a architecto excepturi voluptate tempore, commodi veritatis vitae fuga iure dolorem cumque esse illum soluta obcaecati quod possimus!</p>
                <button className="btn btn-outline border-0 border-b-4 text-slate-300 mt-4">Order Now</button>
            </div>
        </div>
        </div>
    );
};

export default Featured;