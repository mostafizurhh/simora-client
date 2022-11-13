import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            description: 'Excellent team of professionals! Attentive and show concern for patients !! I recommend',
            image: people1,
            name: 'Mozahid',
            city: 'Dhaka, Bangladesh'
        },
        {
            id: 2,
            description: ' I really enjoyed the service, super attentive  and caring. Thanks for everything you have done.',
            image: people2,
            name: 'Kajol',
            city: 'Kolkata, India'
        },
        {
            id: 3,
            description: 'I seriously advise for guaranteed results and effectiveness, optimal prices with easy payment options.',
            image: people3,
            name: 'Joya',
            city: 'Mumbai, India'
        },
    ]

    return (
        <div className='mt-8 md:p-12'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-secondary font-bold text-xl'>Testimonial</p>
                    <p className='text-3xl'>What Our Patients Says</p>
                </div>
                <div className='opacity-60'>
                    <img src={quote} alt="" style={{ width: 192, height: 156 }} />
                </div>
            </div>
            <div className='card grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}></Review>)
                }
            </div>
        </div >
    );
};

export default Testimonial;