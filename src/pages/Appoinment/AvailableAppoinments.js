import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import AppoinmentOption from './AppoinmentOption';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ selectDate }) => {
    const [treatment, setTreatment] = useState(null);

    /* use react query to load data */
    const { data: appoinmentOptions = [] } = useQuery({
        queryKey: ['AppoinmentOptions'],
        queryFn: () =>
            fetch('http://localhost:5000/AppoinmentOptions')
                .then(res => res.json())
    })

    // const [appoinmentOptions, setAppoinmentOptions] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/AppoinmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppoinmentOptions(data))
    // }, [])

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
                        setTreatment={setTreatment}
                    >
                    </BookingModal>
                }
            </>
        </section>
    );
};

export default AvailableAppoinments;