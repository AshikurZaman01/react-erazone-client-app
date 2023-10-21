import React from 'react';
import { Link } from 'react-router-dom';
import SignInWith from '../SignInWith/SignInWith';

const Login = () => {

    const handleLoginFOrm = (e) =>{
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

    }


    return (
        <div className='flex justify-center items-center h-[80vh] w-[600px] border border-pink-400 mx-auto rounded shadow-lg shadow-pink-500'>
            <div className='shadow shadow-pink-500 px-10 py-6 rounded'>
                <div>
                    <h1 className='text-4xl font-semibold text-pink-500'>Login</h1>
                </div>
               
                <div>
                    <form onSubmit={handleLoginFOrm}>
                        
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <label className="input-group input-group-vertical">
                                <span className='text-pink-500'>Email</span>
                                <input  type="text" name='email' placeholder="Enter Your Email" className="input input-bordered " />
                              </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <label className="input-group input-group-vertical">
                                <span className='text-pink-500'>Password</span>
                                <input  type="text" name='password' placeholder="Enter Your Password" className="input input-bordered " />
                              </label>
                        </div>
                        <div className="form-control mt-6 my-2">
                            <label className="label">
                            </label>
                                <button type='submit' className=' bg-pink-500 text-xl p-1 rounded text-gray-700 shadow-md transition-all hover:shadow-green-500'>Login</button>
                        </div>
                        <div>
                            <p>New User <span className='text-blue-500'><Link to={'/register'}> Register Here</Link></span></p>
                        </div>
                        <SignInWith></SignInWith>

                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default Login;