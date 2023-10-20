import React, { useEffect, useState } from 'react';
import { SiLatex } from 'react-icons/si';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const LatestProduct = () => {
    const [products , setProducts] = useState()

    useEffect(()=>{
        fetch('http://localhost:3000/erazone')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    console.log(products)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (


        <div>
            <div className='flex items-center gap-2 text-3xl text-orange-500'>
                <SiLatex></SiLatex>
                <h3>Latest Products</h3>
             </div>
             <div>
                <h1 className='text-5xl py-6'>Browse All Latest Products</h1>
             </div>

             <div className='w-3/4 mx-auto'>
                <div className='mt-20'>
                <Slider {...settings}>

                    {
                       products && products.slice(0,5).map(product =>(
                            <div className='bg-purple-200 w-[400px] h-[340px] text-black rounded-xl shadow-2xl shadow-cyan-700 border border-spacing-1'>
                                <div className='h-56 rounded-t-xl flex justify-center items-center'>
                                    <img className='h-48 w-50 rounded' src={product.productImage} alt="" />
                                </div>
                                <div className='flex flex-col justify-center items-center '>
                                    <div>
                                        <h2>{product.productName}</h2>
                                    </div>
                                    <div>
                                        <h3>Category : {product.category}</h3>
                                    </div>
                                    <div>
                                        <button className='bg-purple-400 px-5 rounded my-4'>Buy Now</button>
                                    </div>
                                </div>
                               
                            </div>
                        ))
                    }
                      </Slider>
                </div>

             </div>
        </div>
    );
};

export default LatestProduct;