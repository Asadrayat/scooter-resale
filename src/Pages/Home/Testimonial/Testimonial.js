import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div>
            <p className='text-5xl mx-10 font-bold text-blue-900 w-full text-center'><FaQuoteLeft></FaQuoteLeft></p>
            <div className="carousel w-full ">
                <div id="item1" className="carousel-item w-full">
                    <p className='text-center w-full my-5 opacity-80 text-xl'>You can be assured of their best preowned <br />Their only motive is to achieve custmer satisfaction <br />John Wick</p>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <p className='text-center w-full my-5 opacity-80 text-xl'>They have wide range of scooters to choose from <br />very fresh and authentic scooters <br />David Warner</p>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <p className='text-center w-full my-5 opacity-80 text-xl'>you can enjoy the freedom and convenience of <br /> owning your own scooter without breaking the bank. <br />Elizabeth Olsen</p>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <p className='text-center w-full my-5 opacity-80 text-xl'>They are very professional at their work<br />The deals are top notch<br />Rocky</p>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn  btn-outline btn-xs">1</a>
                <a href="#item2" className="btn  btn-outline btn-xs">2</a>
                <a href="#item3" className="btn  btn-outline btn-xs">3</a>
                <a href="#item4" className="btn  btn-outline btn-xs">4</a>
            </div>
        </div>
    );
};

export default Testimonial;