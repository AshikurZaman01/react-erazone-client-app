import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div>
            <div className='flex justify-center items-center h-screen text-center'>
                <div>
                    <h1 className='text-6xl text-golden font-bold'>404</h1>
                    <h2 className='text-4xl font-bold text-orange-400'>Sorry, the page you were looking for doesn't exist.</h2>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;