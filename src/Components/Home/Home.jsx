import React from 'react';
import Slider from './Slider/Slider';
import Categories from '../Categories.jsx/Categories';

const Home = () => {
    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div className='w-[95%] mx-auto my-16'>
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;