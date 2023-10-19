import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AllBrands from './ALLBrands/AllBrands';

const Brand = () => {

    const brand = useLoaderData();
    const { category_name } = useParams();

    
    const filteredBrand = brand.filter(item => item.category === category_name);
    console.log(filteredBrand)

   

    return (
        <div className='w-[95%] mx-auto my-10'>
            {
                filteredBrand .length > 0 ? <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    filteredBrand.map((item , i )=> <AllBrands item={item} key={i}></AllBrands>)
                }
            </div>
            : <div className='text-center text-gray-500 text-4xl flex justify-center items-center h-[70vh]'><h1>No Data Found</h1></div>
            }
        </div>
    );
};

export default Brand;