import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';
import Spinner from '../Shared/Spinner/Spinner';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState([]);

    const closeModal = () => {
        setDeleteDoctor(null)
    }


    const { data: doctors = [], isLoading, refetch } = useQuery({
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
    const handleDelete = doctor => {
        // const proceed = window.confirm('Are you seure to delete?')
        // if (proceed) {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success(`Doctor ${doctor.name} deleted successfully`, { duration: 4000 });
                    // const remaining = doctors.filter(doctor => doctor._id !== id);
                    // setDeleteDoctor(remaining);
                    refetch();
                }
            })
        // }

    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='px-4'>
            <h2 className='text-2xl font-bold mb-5 mt-8'>Manage Doctors</h2>
            <div className="overflow-x-auto w-full">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}
                                className='text-indigo-500 hover'>
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
                                    {/* <button onClick={() => handleDelete(doctor._id)} className="btn btn-accent btn-xs">Delete</button> */}
                                    <label onClick={() => setDeleteDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-accent btn-xs">Delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteDoctor && <ConfirmationModal
                    title={`Are You Sure To Delete?`}
                    message={`If you delete ${deleteDoctor.name}, it can not be undone.`}
                    closeModal={closeModal}
                    successModal={handleDelete}
                    modalData={deleteDoctor}

                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;