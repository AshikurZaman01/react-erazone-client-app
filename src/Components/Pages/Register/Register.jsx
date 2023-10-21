import React from 'react';
import { Link } from 'react-router-dom';
import SignInWith from '../SignInWith/SignInWith';

const Register = () => {

    const handleRegisterForm = (e)=>
    {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log( name , photo , email, password);
    }

    return (
        <div>
            <div className='flex justify-center items-center h-[110vh] w-[600px] border border-pink-400 mx-auto rounded shadow-lg shadow-pink-500'>
            <div className='shadow shadow-pink-500 px-16 py-4 rounded'>
                <div>
                    <h1 className='text-4xl font-semibold text-pink-500'>Register</h1>
                </div>
               
                <div>
                    <form onSubmit={handleRegisterForm}>
                        
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <label className="input-group input-group-vertical">
                                <span className='text-pink-500'>Name</span>
                                <input  type="text" name='name' placeholder="Enter Your Name" className="input input-bordered " />
                              </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <label className="input-group input-group-vertical">
                                <span className='text-pink-500'>Photo URL</span>
                                <input  type="text" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered " />
                              </label>
                        </div>
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
                                <button type='submit' className=' bg-pink-500 text-xl p-1 rounded text-gray-700 shadow-md transition-all hover:shadow-green-500'>Register</button>
                        </div>
                        <div>
                            <p>Already Have an Account? <span className='text-blue-500'><Link to={'/login'}> Login Here</Link></span></p>
                        </div>
                        <SignInWith></SignInWith>

                    </form>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Register;