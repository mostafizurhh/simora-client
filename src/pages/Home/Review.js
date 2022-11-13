import React from 'react';

const Review = ({ review }) => {
    const { name, description, image, city } = review;

    return (
        <div className=' card shadow-xl rounded-lg p-5'>
            <div>
                {description}
            </div>
            <div className='flex mt-5'>
                <img src={image} className='btn btn-ghost btn-circle mr-3' alt="" />
                <div className='font-semibold'>
                    <p>{name}</p>
                    <p>{city}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;