import React from 'react';
import { SiHonda } from 'react-icons/si';
import { SiSuzuki } from 'react-icons/si';
import tvs from '../../assets/images/tvs.png';
import { SiYamahamotorcorporation } from 'react-icons/si';
const Dealin = () => {
    return (
        <div>
            <div>
                <p className='text-2xl lg:text-5xl text-blue-900 font-bold text-center my-10'>We Deal IN</p>
            </div>
            <div>
                <div className='grid justify-items-center lg:grid-cols-4 max-w-[1440px] mx-auto'>
                    <SiHonda className='w-24 text-9xl text-blue-900 '></SiHonda>
                    <SiSuzuki className='w-24 text-9xl text-blue-900'></SiSuzuki>
                    <SiYamahamotorcorporation className='w-24 text-9xl text-blue-900'></SiYamahamotorcorporation>
                    <img src={tvs} alt="img" className='w-48' />
                </div>
            </div>
        </div>
    );
};

export default Dealin;