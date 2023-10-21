import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';

const SignInWith = () => {
    return (
        <div className='my-4'>
            <div>
                <div>
                    <h1>Login With</h1>
                </div>
                <div className='text-center text-2xl'>
                    <button className='p-2 rounded-full shadow-lg hover:shadow-pink-500'><FcGoogle></FcGoogle></button>
                    <button className='p-2 rounded-full shadow-lg hover:shadow-pink-500'><AiFillGithub></AiFillGithub></button>
                </div>
            </div>
        </div>
    );
};

export default SignInWith;