import React from 'react';
import { Link } from 'react-router-dom';

const ProductCatagory = ({ ctg }) => {
    const { name, icon, _id } = ctg;
    return (
        <div className={`card text-white p-6 md:card-side shadow-xl `} style={{ backgroundImage: `url("https://i.ibb.co/3rT631L/bg1.jpg")` }}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="font-bold text-white text-xl">{name}</h2>
                <Link to={`/catagoryOptions/${_id}`}><button className='btn bg-gradient-to-r from-red-500 to-red-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300  '>Details</button></Link>
            </div>
        </div>
    );
};

export default ProductCatagory;