import React, { useEffect, useState } from 'react';
import { MdLocalOffer } from 'react-icons/md';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]); // Initialize with an empty array

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    useEffect(() => {
        fetch('review.json')
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div>
            <div className='flex items-center gap-2 text-3xl text-orange-500'>
                <MdLocalOffer />
                <h3>Review</h3>
            </div>
            <div>
                <h1 className='text-5xl py-6'>Customer Review</h1>
            </div>

            <div className='w-[400p] mx-auto'>
                <div className='mt-20 mb-20'>
                    <Slider {...settings}>
                        {reviews.slice(0, 10).map((review, index) => (
                            <div key={index} className='w-[400px]   text-black rounded-xl shadow-2xl  border border-spacing-1'>
                                <div className='h-56 rounded-t-xl flex justify-center gap-5 items-center'>
                                    <img className='h-48 w-50 rounded' src={review.image} alt="" />
                                </div>
                                <div className='flex flex-col justify-center items-center '>
                                    <div className='h-5'>
                                        <h2>{review.name}</h2>
                                    </div>
                                    <div className='my-3 h-[80px] '>
                                        <h3 className='px-2'> {review.review}</h3>
                                    </div>
                                    <div>
                                        <button className='bg-purple-400 px-5 rounded '>{review.date}</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;
