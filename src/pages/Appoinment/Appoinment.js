import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appoinment = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner
                selectDate={selectDate}
                setSelectDate={setSelectDate}>
            </AppoinmentBanner>
            <AvailableAppoinments
                selectDate={selectDate}>
            </AvailableAppoinments>
        </div>
    );
};

export default Appoinment;