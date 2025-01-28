import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [reviews, setReviews ] = useState([]);
    useEffect(()=> {
        fetch('https://bistro-boss-server-kappa-five.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <section className='my-20'>
            <div>
                <SectionTitle heading={'Testimonials'} subHeading={'What Our client says'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                    <div className='m-24 space-y-2 flex flex-col items-center'>
                    <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                    />
                        <p>{review.details}</p>
                        <h3 className='font-bold text-2xl text-yellow-500'>{review.name}</h3>
                    </div>
                    </SwiperSlide>)
                }
            </Swiper>
            </div>

        </section>
    );
};

export default Testimonials;