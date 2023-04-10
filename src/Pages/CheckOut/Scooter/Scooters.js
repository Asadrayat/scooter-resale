import React from 'react';


const Scooter = ({ scooter, setScooterOption, refetch }) => {
    const { catagory, location, picture, used, _id, title, seller, resale_price, posted, original_price, about } = scooter;
    // console.log(scooter);
    return (
        <div className="card w-9/12 bg-base-100 shadow-xl" style={{ backgroundImage: `url("")` }} >
            <figure><img className='h-72 w-full' src={picture} alt="Truck" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">Preowned</div>
                </h2>
                <p> {about?.length > 100 ?
                    `${about.substring(0, 100)}...` : about
                }</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">Original Price : {original_price}</div>
                    <div className="badge badge-outline">Resale_price : {resale_price}</div>
                </div>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">Used : {used}</div>
                    <div className="badge badge-outline">Posted : {posted}</div>
                </div>
                <div className="card-actions  ">
                    <label
                        onClick={() => setScooterOption(scooter)}
                        htmlFor="booking-modal"
                        className='btn bg-gradient-to-r from-red-500 to-red-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300  text-xl mt-4 w-full'
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Scooter;