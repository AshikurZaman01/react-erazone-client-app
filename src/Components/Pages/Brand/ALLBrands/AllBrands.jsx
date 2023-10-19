import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const AllBrands = ({item}) => {

    

    const {_id , productName , productImage , productDescription , rating , productPrice} = item || {}

    return (
        <div>
            <div >
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-[400px] w-full'>
                <img className=" rounded-t-lg h-full w-full" src={productImage} alt="product image" />
            </div>
            <div className="px-5 pb-5">
                <div className='my-4'>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
                </div>
                
                <div className="flex items-center mt-2.5 mb-5">
                <Rating
                initialRating={rating}
                readonly
                />

                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                </div>

                <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${productPrice}</span>
                <Link to={'/brandDetails'} className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800">View Details</Link>
                </div>
            </div>
    </div>
            </div>
        </div>
    );
};

export default AllBrands;