import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewProduct = () => {

    const details = useLoaderData()
  
    console.log(details)

    return (
        <div>
            <div>
            <div className='bg-purple-200 p-10 w-[800px] md:space-x-10 items-center mx-auto flex flex-col md:flex-row rounded'>
                
                <div className='flex-1 ]'>
                    <div className='h-[400px] w-full'>
                        <img className='h-full w-full rounded' src={details.productImage} alt="" />
                    </div>
                </div>
                
                <div className='flex-1 '>
                    <div className='space-y-4'>
                        <h1>{details.productName}</h1>
                        <h2>Brand : {details.category}</h2>
                        <h3>Rating : <span className='px-3 bg-cyan-400 text-orange-500  rounded-lg'>{details.rating}</span></h3>
                        <h3>Price : <span className='text-orange-500 font-bold'>{details.productPrice}</span></h3>
                    </div>
                </div>
            </div>

            <div className='w-[800px] mx-auto bg-purple-200 p-10'>
                <p className='text-justify'>{details.productDescription}</p>
            </div>
        </div>
        </div>
    );
};

export default ViewProduct;