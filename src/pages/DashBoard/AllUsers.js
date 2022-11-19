import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../Shared/Spinner/Spinner';

const AllUsers = () => {


    /* load all users data from server */
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    /* make a user admin */
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('You are an Admin now!!', { duration: 4000 });
                    refetch();
                }
            })
    }

    /* delete a user */
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success(`User deleted successfully`, { duration: 4000 });
                        refetch()
                    }
                })
        }
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='mx-5'>
            <h2 className='font-bold text-2xl mt-8 mb-5'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th>Remove Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr className="hover" key={i}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-secondary btn-sm'>Make Admin</button>}</td>
                                    <td><button onClick={() => handleDelete(user._id)} className='btn btn-error btn-sm'>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;