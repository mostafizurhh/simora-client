import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../Shared/Spinner/Spinner';
import { data } from 'autoprefixer';

const MyAppoinment = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/booking?email=${user?.email}`

    const { data: booking = [], isLoading } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h2 className='text-2xl font-bold mb-5 mt-8'>My Appoinment</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>TreatMent</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((book, i) =>
                                <tr className="hover" key={i}>
                                    <th>{i}</th>
                                    <td>{data.treatmentName}</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;