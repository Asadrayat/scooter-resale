import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PrivateRoute from '../../Router/PrivateRoute';
import BookingModal from './BookingModal/BookingModal';
import Scooter from './Scooter/Scooters';

const CheckOut = () => {
    const { catagory, name } = useLoaderData();
    console.log(catagory);
    const [scooterOption, setScooterOption] = useState([]);
    const { data: scooters = [], refetch } = useQuery({
        queryKey: ['scooters'],
        queryFn: async () => {
            const res = await fetch(`https://scooter-service.vercel.app/${catagory}`);
            const data = await res.json();
            return data
        }
    })
    return (
        <section className='max-w-[1440px] mx-auto'>
            <div>
                <p className='my-10 text-2xl lg:text-5xl text-center text-blue-900 font-bold text'>{name} PreOwned Scooters</p>
                <div className='grid lg:grid-cols-3 my-12  grid-cols-1 align-middle'>
                    {
                        scooters.map(scooter => <Scooter
                            key={scooter._id}
                            scooter={scooter}
                            setScooterOption={setScooterOption}
                        ></Scooter>)
                    }
                </div>
            </div>
            {
                scooterOption &&

                <BookingModal
                    refetch={refetch}
                    key={scooters._id}
                    scooterOption={scooterOption}
                    setScooterOption={setScooterOption}
                ></BookingModal>


            }
        </section>

    );
};

export default CheckOut;