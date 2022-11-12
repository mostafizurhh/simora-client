import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import ContactCard from './ContactCard';

const ContactCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Everyday 10am-4pm',
            icon: clock,
            bgclass: 'bg-gradient-to-l from-secondary to-primary'
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Brooklyn, NY 10014, United States',
            icon: marker,
            bgclass: 'bg-gradient-to-b from-secondary to-warn'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: '+8801725353614',
            icon: phone,
            bgclass: 'bg-gradient-to-l from-primary to-secondary'
        }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
            {
                cardData.map(card => <ContactCard
                    key={card.id}
                    card={card}
                >
                </ContactCard>)
            }

        </div>
    );
};

export default ContactCards;