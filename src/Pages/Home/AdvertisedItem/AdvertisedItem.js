import React from 'react';
import scooter from '../../../assets/images/abt .png';
const AdvertisedItem = () => {
    return (
        <div className="hero py-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-2xl lg:text-5xl font-bold text-center text-blue-900">About Us</h1>
                    <p className="py-6 px-6 text-xl opacity-80">With our expertise in this domain, we, Scooter Resale at Chittagong, Bangladesh are engaged in buying and selling of second hand Scooters. Apart from this, we also deal in new & latest Scooters. We offer a quality, used product backed up with exceptional customer service. All our handsets are processed through our strenuous quality control program to ensure that the product you receive is in full working order. Apart from this, we also deal in fresh & latest Scooters.</p>
                </div>
                <img src={scooter} className="rounded-lg lg:w-1/2 " alt='' />
            </div>
        </div>
    );
};

export default AdvertisedItem;