import React from 'react';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ProductCatagories from '../ProductHome/ProductCatagories';
import Testimonial from '../Testimonial/Testimonial';
import Why from '../Why/Why';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1440px] mx-auto'>
                <ProductCatagories></ProductCatagories>
                <AdvertisedItem></AdvertisedItem>
                <Why></Why>
                <Testimonial></Testimonial>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;