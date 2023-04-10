import React from 'react';
import { Link } from 'react-router-dom';

const Sellyour = () => {
    return (
        <div className='my-10'>
            <p className='text-2xl lg:text-5xl text-blue-900 font-bold text-center'>Sell Your Scooter Quickly and Easily with Us</p>
            <p className='text-2xl mt-4 text-center opacity-70'>It was really easy to sell your scooter!</p>
            <div className='flex item-center justify-evenly mt-5'>
                <Link to='/dashboard/addproduct'><button className='btn bg-gradient-to-r from-red-500 to-red-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300  text-xl ' type="submit">Submit your scooter now</button></Link>
            </div>

        </div>
    );
};

export default Sellyour;