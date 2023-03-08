import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/Authprovider/Authprovider';

const BookingModal = ({ scooterOption, setScooterOption, refetch }) => {
    const { catagory, location, picture, used, _id, title, seller, resale_price, posted, original_price, about } = scooterOption;
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const resale_price = form.resale_price.value;
        const displayName = form.displayName.value;
        const pickup = form.pickup.value;
        const title = form.title.value;
        console.log(displayName);
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(resale_price,title,pickup, displayName, email, phone);

        const booking = {
            title,
            name: displayName,
            resale_price,
            phone,
            pickup,
            email,
            picture

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setScooterOption(null);
                    toast.success('Booking Successful')
                    refetch();
                }
                else {
                    toast.error(data.message)
                }

            })
    }
    return (
        <div>
            <>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-3xl text-center font-bold text-blue-900">Scooter</h3>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                            <input name="title" type="text" defaultValue={title} disabled className="input w-full input-bordered" />
                            <input name="picturer" type="text" defaultValue={picture} disabled className="input w-full input-bordered" />
                            <input name="resale_price" type="text" defaultValue={resale_price} disabled className="input w-full input-bordered" />

                            <input name="displayName" type="text" defaultValue={user?.displayName} placeholder="Your name" className="input w-full input-bordered" />

                            <input name="email" type="email" disabled defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" />
                            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                            <input name="pickup" type="text" placeholder="Enter Pickup Point" className="input w-full input-bordered" />
                            <br />
                            <input className='btn bg-gradient-to-r from-red-500 to-red-900' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </>
        </div>
    );
};

export default BookingModal;