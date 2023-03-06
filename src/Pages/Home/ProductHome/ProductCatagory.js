import React from 'react';
import { Link } from 'react-router-dom';

const ProductCatagory = ({ ctg }) => {
    const { name, icon, _id } = ctg;
    return (
        <div className={`card text-white p-6 md:card-side shadow-xl `} style={{ backgroundImage: `url("https://i.ibb.co/c19KD3P/bg1.jpg")` }}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="font-bold text-blue-900 text-xl">{name}</h2>
                <Link to={`/catagoryOptions/${_id}`}><button className='btn bg-gradient-to-r from-red-500 to-red-900'>Details</button></Link>
            </div>
        </div>
    );
};

export default ProductCatagory;