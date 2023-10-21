import React from 'react';

const Contact = () => {

    const handleContactForm = (e)=>
    {
        e.preventDefault();
        console.log("Form Submitted")
    }

    return (
        <div className='flex justify-center items-center bg-cyan-200'>
            <div>
                <h1 className='text-4xl font-semibold text-pink-500 text-center my-4'>Contact Us</h1>
                <form>
                    <div className='flex flex-col gap-5 border border-pink-500 px-16 py-10 rounded'>
                        <div className="form-control">
                            <label className="label">
                                First Name:
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter your first name" className="input input-bordered" style={{ width: '300px' }} />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                Last Name:
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter your last name" className="input input-bordered" style={{ width: '300px' }} />
                            </label>
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                Email:
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter your email" className="input input-bordered" style={{ width: '300px' }} />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                Message:
                            </label>
                            <label className="input-group">
                                <textarea type="text" placeholder="Write Your Message" className="input input-bordered" style={{ width: '300px', height:'100px' }} />
                            </label>
                        </div>
                        <button onClick={handleContactForm} className='btn-primary py-2 rounded-md '>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
