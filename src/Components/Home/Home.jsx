import React from 'react';
import Slider from './Slider/Slider';
import Categories from '../Categories.jsx/Categories';
import LatestProduct from '../Pages/LatestProduct/LatestProduct';

const Home = () => {
    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div className='w-[95%] mx-auto my-16'>
                <Categories></Categories>
            </div>
            <div className='w-[95%] mx-auto my-16'>
                <LatestProduct></LatestProduct>
            </div>
        </div>
    );
};

export default Home;