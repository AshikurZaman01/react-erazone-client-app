import React from 'react';
import { MdLocalOffer } from 'react-icons/md';

const Offer = () => {
    return (
        <div>
              <div className='flex items-center gap-2 text-3xl text-orange-500'>
                <MdLocalOffer></MdLocalOffer>
                <h3>Sales</h3>
             </div>
             <div>
                <h1 className='text-5xl py-6'>Winter Offer</h1>
             </div>

             <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsZXN8ZW58MHx8MHx8fDA%3D'})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                <h2 className="text-6xl font-bold mb-2 text-pink-500">Winter Offers Comming Soon !!!</h2>
                <p className="text-4xl text-yellow-200">Get Ready For Take a Opportunity</p>
               
                <div className='flex justify-end'>
                  <h1 className='text-5xl mt-10 p-6 py-10 rounded-full bg-red-400'>50% <sup className='text-black '>OFF</sup></h1>

                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Offer;