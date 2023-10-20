import React from 'react';
import Rating from 'react-rating';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { GrUpdate , GrView } from 'react-icons/gr';
import Swal from 'sweetalert2';

const AllBrands = ({item}) => {

    const {_id , productName , productImage , productDescription , rating , productPrice} = item || {}

    const handleDelete = (id) => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`http://localhost:3000/erazone/${id}` , {
                method: 'DELETE'
              })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0)
                    {
                        Swal.fire(
                            'Deleted!',
                            'Your Product has been deleted.',
                            'success'
                          )
                        setTimeout(()=>
                        {
                            window.location.reload()
                        },1000)
                    }
                })
            }
          })

    }
    
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

                
                <div className="btn-group btn-group-vertical">
                    <button onClick={()=>handleDelete(_id)} className="btn text-xl text-red-500"><RiDeleteBack2Line></RiDeleteBack2Line> </button>
                    <button className="btn text-xl text-green-500"><GrUpdate></GrUpdate></button>
                    <button className="btn text-xl"><GrView></GrView></button>
                </div>

                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default AllBrands;