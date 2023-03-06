import React from 'react';
import img1 from '../../../assets/images/banner.jpg';
import img2 from '../../../assets/images/ban2.png';
import img3 from '../../../assets/images/ban3.png';
const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex items-center p-8 w-full " style={{ backgroundImage: `url("https://i.ibb.co/BBxgqmf/bg.jpg")` }}>
                        <div className="mx-auto flex ">
                            <img src={img1} alt="avatar" srcset="" />
                        </div>
                        <div className='w-1/2' >
                            <h1 className="text-5xl text-blue-900 font-bold mb-4">Buy Now</h1>
                            <p className="text-5xl text-blue-900 leading-relaxed mb-4">Best Prices, Best Products</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 btn-outline">❮</a>
                        <a href="#slide2" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex items-center p-8 w-full " style={{ backgroundImage: `url("https://i.ibb.co/BBxgqmf/bg.jpg")` }}>
                        <div className="mr-8 flex">
                            <img src={img2} alt="avatar" srcset="" />
                        </div>
                        <div className='w-1/2'>
                            <h1 className="text-5xl text-blue-900 font-bold mb-4 ">Budget Problem! No worries,</h1>
                            <p className="text-5xl text-blue-900 leading-relaxed mb-4"> Buy your scooter in budget</p>
                        </div>
                    </div>                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 btn-outline">❮</a>
                        <a href="#slide3" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex items-center p-8 w-full" style={{ backgroundImage: `url("https://i.ibb.co/BBxgqmf/bg.jpg")` }}>
                        <div className="mr-8 flex">
                            <img src={img3} alt="avatar" srcset="" />
                        </div>
                        <div className='w-1/2'>
                            <h1 className="text-5xl text-blue-900 font-bold mb-4">Best Deals On</h1>
                            <p className="text-5xl text-blue-900 leading-relaxed mb-4">Sacondhand Scooter</p>
                        </div>
                    </div>                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 btn-outline">❮</a>
                        <a href="#slide1" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 btn-outline">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;