import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';


const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;

        const date = form.date.value;
        const slot = form.slot.value;
        const customer = form.customer.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const bookinginfo = {
            treatmentId: treatment.serviceId,
            treatmentName: name,
            bookingDate: date,
            slot,
            customer,
            email,
            phone
        }

        /* send bookingInfo data to server to create a new collection */
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookinginfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Your Booking Has Been Confirmed', { duration: 4000 });
                    refetch();/* auto update data without relodad */
                }
                /* Limit one booking per user per treatment per day */
                else {
                    toast.error(data.message, { duration: 4000 })
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg mb-5 font-bold">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" name='date' defaultValue={format(selectedDate, 'PP')} className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" readOnly />
                        <select name='slot' className="select select-bordered w-full max-w-xs md:max-w-md mb-5">
                            {
                                slots.map((slot, index) => <option
                                    value={slot}
                                    key={index}>
                                    {slot}
                                </option>)
                            }
                        </select>
                        <input type="text" name='customer' placeholder="Full Name" defaultValue={user?.displayName} className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" readOnly />

                        <input type="email" name='email' placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" readOnly />

                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" required />

                        <input type="submit" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md btn btn-primary bg-gradient-to-l from-primary to-secondary text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;