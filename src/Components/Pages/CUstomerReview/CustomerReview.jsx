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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    useEffect(() => {
        fetch('review.json')
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div>
            <div className='flex  items-center gap-2 text-3xl text-orange-500'>
                <MdLocalOffer />
                <h3>Review</h3>
            </div>
            <div>
                <h1 className='text-5xl py-6'>Customer Review</h1>
            </div>

            <div className='w-full mx-auto'>
            <div className='mt-10 mb-10'>
                <Slider {...settings}>
                    {reviews.slice(0, 10).map((review, index) => (
                        <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 text-black rounded-xl shadow-2xl p-4 mb-4'>
                            <div className='h-64 rounded-t-xl flex justify-center items-center'>
                                <img className='h-48 w-48 rounded' src={review.image} alt={review.name} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='h-10'>
                                    <h2>{review.name}</h2>
                                </div>
                                <div className='my-3 h-[80px] overflow-hidden'>
                                    <h3 className='px-2 overflow-ellipsis overflow-hidden'>{review.review}</h3>
                                </div>
                                <div>
                                    <button className='bg-purple-400 px-4 py-2 rounded'>{review.date}</button>
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
