import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectDate }) => {
    const { name, slots } = treatment
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg mb-5 font-bold">{name}</h3>
                    <form action="">
                        <input type="text" defaultValue={format(selectDate, 'PP')} className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" readOnly />
                        <select className="select select-bordered w-full max-w-xs md:max-w-md mb-5">
                            {
                                slots.map((slot, index) => <option
                                    value={slot}
                                    key={index}>
                                    {slot}
                                </option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" required />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" required />
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" required />
                        <input type="submit" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md btn btn-primary bg-gradient-to-l from-primary to-secondary text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;