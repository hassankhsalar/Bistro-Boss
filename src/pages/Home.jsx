import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;