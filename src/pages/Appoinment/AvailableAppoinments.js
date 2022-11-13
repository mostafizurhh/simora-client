import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentOption from './AppoinmentOption';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ selectDate }) => {
    const [appoinmentOptions, setAppoinmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('appoinmentOptions.json')
            .then(res => res.json())
            .then(data => setAppoinmentOptions(data))
    }, [])

    return (
        <section className='px-6 md:px-12'>
            <div>
                <p className='font-extrabold text-secondary text-xl text-center mt-12'>Appoinment Available on {format(selectDate, 'PP')}. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    appoinmentOptions.map(appoinmentOption => <AppoinmentOption
                        key={appoinmentOption.serviceId}
                        appoinmentOption={appoinmentOption}
                        setTreatment={setTreatment}></AppoinmentOption>)
                }
            </div>
            <>
                {
                    treatment &&
                    <BookingModal
                        selectDate={selectDate}
                        treatment={treatment}
                    >
                    </BookingModal>
                }
            </>
        </section>
    );
};

export default AvailableAppoinments;