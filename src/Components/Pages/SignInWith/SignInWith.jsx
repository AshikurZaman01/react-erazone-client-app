import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SignInWith = () => {

    const {googleLogin , githubLogin} = useContext(AuthContext)

    const handleGoogleLogin = () => { {
        googleLogin()
        .then( res => {
            console.log(res);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login With Google Successful',
                showConfirmButton: false,
                timer: 1500
              })
              window.location.href = '/';
        }) 
        .catch( err => console.log(err));
        Swal.fire('Oops...', 'Something went wrong!', 'error');

    }
    }
    
    const handleGithubLogin = () =>  {
        githubLogin()
        .then( res => {
            console.log(res);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login With Google Successful',
                showConfirmButton: false,
                timer: 1500
              })
              window.location.href = '/';
        }) 
        .catch( err => console.log(err));
        Swal.fire('Oops...', 'Something went wrong!', 'error'); 
    }


    return (
        <div className='my-4'>
            <div>
                <div>
                    <h1>Login With</h1>
                </div>
                <div className='text-center text-2xl'>
                    <button onClick={handleGoogleLogin} className='p-2 rounded-full shadow-lg hover:shadow-pink-500'><FcGoogle></FcGoogle></button>
                    <button onClick={handleGithubLogin} className='p-2 rounded-full shadow-lg hover:shadow-pink-500'><AiFillGithub></AiFillGithub></button>
                </div>
            </div>
        </div>
    );
};

export default SignInWith;