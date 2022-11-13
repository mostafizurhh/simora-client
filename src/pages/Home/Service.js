import React from 'react';

const Service = ({ service }) => {
    const { name, image, description } = service;

    return (
        <div className='card card-side px-6 shadow-xl border flex-col items-center justify-center text-justify'>
            <img style={{ width: 100, height: 100 }} src={image} alt="" />
            <p className='font-bold'>{name}</p>
            <p>{description}</p>
        </div>
    );
};

export default Service;