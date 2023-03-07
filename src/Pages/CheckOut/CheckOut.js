import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Scooter from './Scooter/Scooters';

const CheckOut = () => {
    const { catagory, name } = useLoaderData();
    console.log(catagory);
    const [scootereOption, setScootereOption] = useState([]);
    const { data: scooters = [], refetch } = useQuery({
        queryKey: ['scooters'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/${catagory}`);
            const data = await res.json();
            return data
        }
    })
    return (
        <section className='max-w-[1440px] mx-auto'>
            <div>
                <p className='my-10 text-5xl text-blue-900 font-bold text-center'>{name} PreOwned Scooters</p>
                <div className='grid lg:grid-cols-3 my-12  grid-cols-1 align-middle'>
                    {
                        scooters.map(scooter => <Scooter
                            key={scooter._id}
                            scooter={scooter}
                            setscooterOption={setScootereOption}
                        ></Scooter>)
                    }
                </div>
            </div>
            {
                // scooterOption &&
                // <BookingModal
                //     refetch={refetch}
                //     key={scooters._id}
                //     scooterOption={scooterOption}
                //     setscooterOption={setscooterOption}
                // ></BookingModal>
            }
        </section>

    );
};

export default CheckOut;