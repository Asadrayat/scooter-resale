import React from 'react';
import img from '../../../assets/images/why.jpg';
const Why = () => {
    return (
        <div>
            <div className="hero">
                <div> 
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <img src={img} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />

                        <div className='w-1/2'>
                            <div className='hero-content flex-col lg:flex-row'>
                                <p className='text-9xl text-blue-900 font-bold'>1</p>
                                <div className=''>
                                    <h1 className='text-2xl text-blue-900 font-medium'>Save time.</h1>
                                    <p className='text-xl opacity-80'>We make the process of buying and selling scooter easier than ever. From pickup to storage, inspection, cleaning, and delivery, we do all the heavy lifting for you so that good scooter doesn’t go to waste. </p>
                                </div>
                            </div>
                            <div className='hero-content flex-col lg:flex-row'>
                                <p className='text-9xl text-blue-900 font-bold'>2</p>
                                <div className=''>
                                    <h1 className='text-2xl text-blue-900 font-medium'>Buying? Save money. </h1>
                                    <p className='text-xl opacity-80'>Looking for an affordable and reliable mode of transportation? Look no further than our preowned scooters! With prices that are a fraction of what you would pay for a new model</p>
                                </div>
                            </div>
                            <div className='hero-content flex-col lg:flex-row'>
                                <p className='text-9xl text-blue-900 font-bold'>3</p>
                                <div className=''>
                                    <h1 className='text-2xl text-blue-900 font-medium'>Selling? Get paid.</h1>
                                    <p className='text-xl opacity-80'>Sit back and relax. We do all the work necessary to get the most value out of your scooter. When your item gets sold, you get paid.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Why;