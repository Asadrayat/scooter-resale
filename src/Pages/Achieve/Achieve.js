import React from 'react';
import { GiScooter } from 'react-icons/gi';
import { FaAward } from 'react-icons/fa';
import { BiHappyAlt } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
const Achieve = () => {
    return (
        <div className="hero lg:h-96 lg:my-16 " style={{ backgroundImage: `url("https://i.ibb.co/614G7Wh/achieve.jpg")` }}>
            <div className="hero-overlay bg-opacity-80 bg-black "></div>
            <div className="hero-content text-center text-neutral-content flex flex-col">
                <p className='text-2xl lg:text-5xl text-white font-bold'>What Have We Achieved</p>
                <div className='grid lg:grid-cols-4 gap-16'>
                    <div>
                        <div className='lg:w-48 lg:h-48 border-8 rounded-full border-blue-900 '>
                            <div ><GiScooter className='text-9xl ml-5 lg-ml-0 lg:pl-6 '></GiScooter></div>
                            <div className='text-xl font-bold'>450+</div>
                        </div>
                        <p className='text-xl mt-4 font-bold'>Vehicles In Stock</p>
                    </div>
                    <div>
                        <div className='w-48 h-48 border-8 rounded-full border-blue-900 '>
                            <div ><FaAward className='text-9xl mt-5 lg:mt-0 lg:ml-0 ml-5 lg:pl-10 lg:pt-4 '></FaAward></div>
                            <div className='text-xl font-bold'>50</div>
                        </div>
                        <p className='text-xl mt-4 font-bold'>Awards</p>
                    </div>
                    <div>
                        <div className='w-48 h-48 border-8 rounded-full border-blue-900 '>
                            <div ><BiHappyAlt className='text-9xl ml-5 lg:ml-0 mt-3 lg:mt-0 lg:pl-10 '></BiHappyAlt></div>
                            <div className='text-xl font-bold'>100%</div>
                        </div>
                        <p className='text-xl mt-4 font-bold'>Happy Customers</p>
                    </div>
                    <div>
                        <div className='w-48 h-48 border-8 rounded-full border-blue-900 '>
                            <div ><IoIosPeople className='text-9xl ml-5 lg:ml-0 lg:pl-10 '></IoIosPeople></div>
                            <div className='text-xl font-bold'>30</div>
                        </div>
                        <p className='text-xl mt-4 font-bold'>Qualified Staff</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Achieve;