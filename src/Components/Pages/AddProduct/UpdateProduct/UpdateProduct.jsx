import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {

    const products = useLoaderData();

    const {_id , productName , productImage , productDescription , category, rating , productPrice} = products || {}

console.log(products)
    const handleUpdateForm = (e)=>
    {
        e.preventDefault();
        
        const form = e.target;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const productDescription = form.productDescription.value;
        const productImage = form.productImage.value;
        const category = form.category.value;
        const rating =  form.rating.value;

        const updateProducts = {
            productName,
            productPrice,
            productDescription,
            productImage,
            category,
            rating
        }
        console.log(updateProducts)

        fetch(`http://localhost:3000/erazone/${_id}` , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateProducts)
        })
        .then(res => res.json())
        .then(data => 
            {
                console.log(data)
                if(data.modifiedCount > 0)
                {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-right',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Product Update Successfully'
                      })
                }
            })
        


    }

    return (
        <div>
            <div className='flex justify-center items-center h-[90vh] w-[95%] mx-auto'>
            <div>
                <div className='text-center w-full sm:w-[80%] mx-auto bg-cyan-100 py-8 px-4 sm:px-10 rounded'>
                    <h1 className='text-3xl font-semibold text-cyan-500 py-4'>Update Products</h1>
                    <p className='text-center text-sm text-gray-500'>
                        Explore a diverse range of cutting-edge products from industry giants Apple, Google, Intel, and Samsung, featuring innovation, quality, and style.
                    </p>

                    <div className='my-4'>
                        <form onSubmit={handleUpdateForm}>
                            <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                                <div className='w-full sm:w-1/2'>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>Product Name</span>
                                        </label>
                                        <label className='input-group input-group-vertical'>
                                            <input type='text' defaultValue={productName} name='productName' placeholder='Product Name' className='input input-bordered' />
                                        </label>
                                    </div>
                                </div>
                                <div className='w-full sm:w-1/2'>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>Price</span>
                                        </label>
                                        <label className='input-group input-group-vertical'>
                                            <input type='text' defaultValue={productPrice} name='productPrice' placeholder='Product Price' className='input input-bordered' />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                                <div className='w-full sm:w-1/2'>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>Select Category</span>
                                        </label>
                                        <select  name='category' className='select select-bordered'>
                                            <option value="" disabled defaultValue>
                                                Pick category
                                            </option>
                                            <option value="Apple">Apple</option>
                                            <option value="Samsung">Samsung</option>
                                            <option value="Sony">Sony</option>
                                            <option value="Google">Google</option>
                                            <option value="Intel">Intel</option>
                                            <option value="Asus">Asus</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='w-full sm:w-1/2'>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>Rating</span>
                                        </label>
                                        <select  name='rating' className='select select-bordered'>
                                            <option  value="" disabled defaultValue>
                                                Pick a Rating
                                            </option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                                <div className='w-full sm:w-1/2'>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>Short Description</span>
                                        </label>
                                        <label className='input-group input-group-vertical'>
                                            <textarea placeholder='Short Description...' name='productDescription' defaultValue={productDescription} className='textarea textarea-bordered textarea-sm w-full max-w-xs'></textarea>
                                        </label>
                                    </div>
                                </div>
                                <div className='w-full sm:w-1/2'>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>Photo URL</span>
                                        </label>
                                        <label className='input-group input-group-vertical'>
                                            <input type='text' defaultValue={productImage} name='productImage' placeholder='Photo URL' className='input input-bordered' />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center sm:justify-between items-center gap-4 mt-6'>
                                <div className='w-full '>
                                    <div className='form-control'>
                                        <label className='input-group input-group-vertical'>
                                            <button type="submit" className='bg-cyan-500 p-2 text-white w-full  hover:bg-cyan-400 hover:text-black'>Update Product</button>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UpdateProduct;