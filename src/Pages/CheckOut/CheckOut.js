import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import Furniture from './Furniture/Furniture';

const CheckOut = () => {
    const { name } = useLoaderData();
    const [furnitureOption, setFurnitureOption] = useState([]);
    const { data: furnitures = [], refetch } = useQuery({
        queryKey: ['furnitures'],
        queryFn: async () => {
            const res = await fetch(`https://recycle-bin-server-rose.vercel.app/${name}`);
            const data = await res.json();
            return data
        }
    })
    return (
        <section>
            <div className='grid lg:grid-cols-2 my-12  grid-cols-1 align-middle'>
                {
                    furnitures.map(furniture => <Furniture
                        key={furniture._id}
                        furniture={furniture}
                        setFurnitureOption={setFurnitureOption}
                    ></Furniture>)
                }
            </div>
            {
                furnitureOption &&
                <BookingModal
                    refetch={refetch}
                    key={furnitures._id}
                    furnitureOption={furnitureOption}
                    setFurnitureOption={setFurnitureOption}
                ></BookingModal>
            }
        </section>

    );
};

export default CheckOut;