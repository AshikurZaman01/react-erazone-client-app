import React, { useEffect, useState } from 'react';

const Slider = () => {
    const images = [
        'https://img.freepik.com/free-photo/elegant-digital-smart-phone-background_1409-4094.jpg',
        
        'https://img.freepik.com/free-photo/futuristic-galaxy-mobile-phone-connects-with-wireless-technology-generated-by-ai_188544-29655.jpg',

        'https://img.freepik.com/free-photo/portable-information-device-with-damaged-touch-screen-generative-ai_188544-46211.jpg    ',
    ];

    const text1 = <div>
            <div>
                <h1 className='text-6xl text-center'>Iphone 15</h1><br />
                <h4 className='text-3xl text-yellow-300 text-center  '>New Arrival</h4>
                <button className='text-2xl text-center block mx-auto mt-10 bg-orange-400 px-10 rounded py-2 opacity-90'>Buy Now</button>
            </div>
        </div>;

const text2 = <div>
<div>
    <h1 className='text-6xl text-center'>Samsung S-23</h1><br />
    <h4 className='text-3xl text-yellow-300 text-center  '>New Arrival</h4>
    <button className='text-2xl text-center block mx-auto mt-10 bg-blue-400 px-10 rounded py-2 opacity-90'>Buy Now</button>
</div>
</div>;

const text3 = <div>
<div>
    <h1 className='text-6xl text-center'>Asus Zenphone </h1><br />
    <h4 className='text-3xl text-yellow-300 text-center  '>New Arrival</h4>
    <button className='text-2xl text-center block mx-auto mt-10 bg-pink-400 px-10 rounded py-2 opacity-90'>Buy Now</button>
</div>
</div>;

    const textData = [
      text1,
      text2,
      text3,
    ];
    

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    return (
        <div className="w-screen h-full max-w-screen-xl mx-auto md:h-[85vh] bg-red-500 overflow-hidden">
            <div className="relative overflow-hidden h-full">
                <div
                    className="flex transition-transform duration-300 ease-in-out transform"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-64 md:h-96 flex-shrink-0 relative">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full  md:h-[85vh] object-cover"
                            />
                            <div className="absolute h-[85vh] right-0 top-0 w-full  flex items-center justify-center text-xl md:text-[100px] bg-black bg-opacity-60 text-white   p-4">
                                {textData[index]}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <button
                    onClick={prevSlide}
                    className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 focus:outline-none"
                >
                    Previous
                </button>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <button
                    onClick={nextSlide}
                    className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 focus:outline-none"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Slider;
