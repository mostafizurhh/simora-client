import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import is from 'date-fns/esm/locale/is/index.js';
import React from 'react';
import Spinner from '../Shared/Spinner/Spinner';

const AddADoctor = () => {
    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const speciality = form.speciality.value;

        const doctorInfo = {
            name,
            email,
            phone,
            speciality
        }
        console.log(doctorInfo)
    }
    /* load speciality field data from server */
    const { data: specialities = [], isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/specialities');
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='mx-5'>
            <h2 className="text-2xl font-bold mb-5 mt-8">Add A Doctor</h2>
            <div>
                <form onSubmit={handleFormSubmit} className='flex flex-col'>
                    <input type="text" name='name' placeholder="Doctor's Full Name" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" />

                    <input type="email" name='email' placeholder="Email" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" />

                    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" />

                    <select name='speciality' className="select select-bordered w-full mb-5 max-w-xs md:max-w-md">
                        <option selected>Choose A Speciality</option>
                        {
                            specialities.map(speciality => <option
                                key={speciality._id}
                                value={speciality.name}>
                                {speciality.name}
                            </option>)
                        }
                    </select>

                    <input type="file" className="file-input file-input-bordered file-input-accent w-full mb-5 max-w-xs md:max-w-md" />

                    <button type="submit" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md btn btn-primary bg-gradient-to-l from-primary to-secondary text-white" >Add Doctor</button>
                </form>
            </div>
        </div>
    );
};

export default AddADoctor;