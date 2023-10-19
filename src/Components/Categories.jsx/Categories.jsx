import React, { useEffect, useState } from 'react';
import { TbCategoryFilled } from 'react-icons/tb';
import CardCategory from './CardCategory/CardCategory';

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    
    return (
        <div>
             <div className='flex items-center gap-2 text-3xl text-cyan-500'>
                <TbCategoryFilled></TbCategoryFilled>
                <h3>Categories</h3>
             </div>
             <div>
                <h1 className='text-5xl py-6'>Browse by Category</h1>
             </div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mx-auto my-10'>
             {
                categories.map(category => <CardCategory category={category} key={category.category_id}></CardCategory>)
             }
             </div>
             
        </div>
    );
};

export default Categories;