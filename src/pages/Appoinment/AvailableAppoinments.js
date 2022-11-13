import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinments = ({ selectDate }) => {
    return (
        <section>
            <p className='font-extrabold text-secondary text-xl text-center mt-12'>Appoinment Available on {format(selectDate, 'PP')}. </p>
        </section>
    );
};

export default AvailableAppoinments;