import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const CardCategory = ({category}) => {

    console.log(category)

    const {category_id , category_name , category_image , short_description} = category || {}

    return (
        <div>
            <div className=''>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='w-full h-[300px]'><img className='w-full h-full' src={category_image} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{category_name}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions justify-end">
                   
                    <Link to={'/category_name'}>
                    <div>
                        <button className="btn btn-primary ">Go <span className='text-[20px] font-bold px-2 '><AiOutlineArrowRight></AiOutlineArrowRight></span></button>
                    </div>
                    </Link>

                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CardCategory;