import React from 'react';
import Rating from 'react-rating';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { GrUpdate , GrView } from 'react-icons/gr';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {_id , productName , productImage , productPrice , rating , productDescription} = product || {};

    return (
        <div>
            <div className=''>
            <div className="w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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

                
                <div className="btn-group btn-group-vertical">
                    <Link to={`/productDetails/${product._id}`}>
                    <button className="btn text-xl btn-primary">VIew Details</button>
                    </Link>
                </div>

                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ProductCard;