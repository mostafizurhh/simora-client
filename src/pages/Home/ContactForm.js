import React from 'react';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import back from '../../assets/images/appoinment.png'

const ContactForm = () => {
    return (
        <div className="hero mt-16" style={{ backgroundImage: `url(${back}` }}>
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-xl font-extrabold text-secondary">Contact Us</h1>
                    <h1 className="text-2xl font-bold text-white mb-6">Stay Connected With Us</h1>
                </div>
                <div className="card text-center">
                    <div className="card-body p-0">
                        <div className="form-control w-full max-w-md">
                            <input type="email" name='email' placeholder="Email" className="input input-bordered md:w-[450px] w-[280px]" required />
                        </div>
                        <div className="form-control">
                            <input type="text" name='subject' placeholder="Subject" className="input input-bordered" required />
                        </div>
                        <div className='form-control mb-6'>
                            <textarea className="textarea textarea-bordered h-[150px]" name='messsage' placeholder="Your Message" required></textarea>
                        </div>
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;