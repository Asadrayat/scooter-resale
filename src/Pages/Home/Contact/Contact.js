import React from 'react';
import bg from '../../../assets/images/contact.jpg';
const Contact = () => {
    return (
        <div className='w-11/12 mx-auto lg:w-full'>
            <p className='text-center font-bold text-2xl lg:text-5xl text-blue-900 my-10'>Contact Us</p>
            <section className='lg:py-16 my-5 lg:my-20 ' style={{
                background: `url(${bg})`,
                backgroundSize: 'cover'
            }}>
                <p className='text-3xl text-base-100 text-center font-semibold'>Stay connected with us</p>
                <div className='flex justify-center  '>
                    <form className='flex flex-col '>
                        <div className="form-control my-4">
                            <label className="input-group">
                                <input type="text" placeholder="info@site.com" required className="input input-bordered w-full lg:w-96" />
                            </label>
                        </div>
                        <div className="form-control my-4">
                            <label className="input-group">
                                <input type="text" placeholder="Subject" required className="input input-bordered w-full lg:w-96" />
                            </label>
                        </div>
                        <div className="form-control my-4">
                            <label className="input-group">

                                <input type="text" placeholder="message" required className="input input-bordered h-44 w-full lg:w-96" />
                            </label>
                        </div>
                        <div className="form-control my-4">
                            <button className='btn bg-gradient-to-r from-red-500 to-red-900' type="submit">Submit</button>
                        </div>
                    </form>

                </div>
            </section>
        </div>


    );
};

export default Contact;