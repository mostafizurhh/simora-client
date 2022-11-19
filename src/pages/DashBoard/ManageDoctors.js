import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../Shared/Spinner/Spinner';

const ManageDoctors = () => {
    const [deleteDoctors, setDeleteDoctors] = useState([])
    const { data: doctors = [], isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json()
                return data;
            }
            catch (error) {
                console.log(error)
            }
        }
    })

    /* delete a doctor */
    const handleDelete = id => {
        const proceed = window.confirm('Are you seure to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/doctors/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Doctor deleted successfully', { duration: 4000 });
                        const remaining = doctors.filter(doctor => doctor._id !== id);
                        setDeleteDoctors(remaining);
                    }
                })
        }

    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h2 className='text-2xl font-bold mb-5 mt-8'>Manage Doctors</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <td>{i + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className='w-14 rounded-full'>
                                            <img src={doctor.photo} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.speciality}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.phone}</td>
                                <th>
                                    <button onClick={() => handleDelete(doctor._id)} className="btn btn-accent btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;