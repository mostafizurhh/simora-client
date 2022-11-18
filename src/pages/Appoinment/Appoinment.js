import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appoinment = () => {
    const [selectedDate, setselectedDate] = useState(new Date());
    return (
        <div className='mx-5'>
            <AppoinmentBanner
                selectedDate={selectedDate}
                setselectedDate={setselectedDate}>
            </AppoinmentBanner>
            <AvailableAppoinments
                selectedDate={selectedDate}>
            </AvailableAppoinments>
        </div>
    );
};

export default Appoinment;