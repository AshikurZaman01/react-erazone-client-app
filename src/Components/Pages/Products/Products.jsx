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