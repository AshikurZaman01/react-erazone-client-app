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
                        <h1 className='text-4xl font-semibold'>{details.productName}</h1>
                        <h2 className='text-3xl'>Brand : {details.category}</h2>
                        <h3 className='text-3xl'>Rating : <span className='px-3 bg-cyan-400 text-orange-500  rounded-lg'>{details.rating}</span></h3>
                        <h3 className='text-2xl'>Price : <span className='text-orange-500 font-bold'>{details.productPrice}</span></h3>
                    </div>
                </div>
            </div>

            <div className='w-[800px] mx-auto bg-purple-200 p-10'>
                <h1 className='underline text-4xl font-bold text-cyan-600 mb-10'>View Specifications</h1>
                <p className='text-justify'>{details.productDescription}</p>
            </div>
        </div>
        </div>
    );
};

export default ViewProduct;