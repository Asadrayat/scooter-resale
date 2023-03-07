import { useQuery } from '@tanstack/react-query';
// import React, { useEffect, useState } from 'react';
import ProductCatagory from './ProductCatagory';
const ProductCatagories = () => {
    const { data: catagories = [] } = useQuery({
        queryKey: ['catagoryOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/catagoryOptions');
            const data = await res.json();
            return data
        }
    })


    return (
        <div className='max-w-[1440px] mx-auto'>
            <p className='text-5xl text-center mt-16 text-blue-900 font-bold'>Caterogries</p>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    catagories.map(ctg => <ProductCatagory
                        key={ctg.id}
                        ctg={ctg}
                    ></ProductCatagory>)
                }
            </div>
        </div>
    );
};

export default ProductCatagories;