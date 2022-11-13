import React from 'react';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const AppoinmentOption = ({ setTreatment, appoinmentOption }) => {
    const { name, slots } = appoinmentOption;

    return (
        <div className="card shadow-xl text-center">
            <div className="card-body">
                <h2 className="text-xl text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available.</p>
                <div className="card-actions justify-center">

                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary bg-gradient-to-l from-primary to-secondary text-white"
                        onClick={() => setTreatment(appoinmentOption)}
                    >
                        Book Appoinment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;