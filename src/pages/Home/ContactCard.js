import React from 'react';

const ContactCard = ({ card }) => {
    const { name, description, icon, bgclass } = card;

    return (
        <div className={`card card-side px-6 shadow-xl ${bgclass}`}>
            <figure>
                <img src={icon} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ContactCard;