import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';

const Products = () => {

    const [products, setProducts] = useState();

    useEffect(()=>{
        fetch('http://localhost:3000/erazone')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    console.log(products)
    return (
        <div className='w-[95%]  mx-auto'>

        <div class="bg-gray-200 py-10 my-10">
        <div class="container mx-auto flex items-center justify-center">
            <div class="w-1/2">
            <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D" alt="Image Description" class="w-full h-auto" />
            </div>

            <div class="w-1/2">
            <p class="text-4xl font-semibold text-gray-700">
                30<span className='text-yellow-400'>%</span> on Sale
            </p>
            <p class="text-lg text-gray-600 mt-4">
                <button className='bg-yellow-400 px-6 rounded text-white'>Buy Now</button>
            </p>
            </div>
        </div>
        </div>

        <div className='flex justify-center mt-5 mb-20'>
            <div>
                <input className='rounded w-[600px]' type="text" name="" id="" placeholder='Search Here' />
                <button className='bg-purple-600 p-2 px-5 rounded text-white'>Search</button>
            </div>
        </div>


            <div>
            <div className='w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  '>
                {
                    products && products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
                }
            </div>
            </div>
           
        </div>
    );
};

export default Products;