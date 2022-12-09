import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Spinner from '../Shared/Spinner/Spinner';
import AppoinmentOption from './AppoinmentOption';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');//send date as query parameter to get the right date for booking

    /* use react query to load data */
    const { data: appoinmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['AppoinmentOptions', date],
        queryFn: () =>
            fetch(`http://localhost:5000/AppoinmentOptions?date=${date}`)
                .then(res => res.json())
    })

    // const [appoinmentOptions, setAppoinmentOptions] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/AppoinmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppoinmentOptions(data))
    // }, [])

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <section className='px-6 md:px-12'>
            <div>
                <p className='font-extrabold text-secondary text-xl text-center mt-12'>Appoinment Available on {format(selectedDate, 'PP')}. </p>
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
                        selectedDate={selectedDate}
                        treatment={treatment}
                        setTreatment={setTreatment}
                        refetch={refetch} /* auto update data without relodad */
                    >
                    </BookingModal>
                }
            </>
        </section>
    );
};

export default AvailableAppoinments;