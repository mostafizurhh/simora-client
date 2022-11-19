import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData()
    console.log(data)

    return (
        <div>
            <h2 className='text-3xl font-bold mt-8'>Payment for <span className='text-secondary'>{data.treatmentName}</span></h2>
            <h2 className='text-xl text-orange-600 font-bold mt-3 mb-5'>Price: ${data.price}</h2>
        </div>
    );
};

export default Payment;