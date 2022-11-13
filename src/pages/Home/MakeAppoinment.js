import React from 'react';
import doctor from '../../assets/images/doctor.png'
import back from '../../assets/images/appoinment.png'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <div className="hero md:mt-32 mt-16 lg:px-10" style={{ backgroundImage: `url(${back}` }}>
            <div className="hero-content p-0 flex-col md:flex-row">
                <img src={doctor} className=" lg:w-1/2 rounded-lg hidden md:block lg:-mt-28" alt='' />
                <div className='lg:px-20 p-4'>
                    <p className='text-secondary font-bold text-lg'>Appointment</p>
                    <h1 className="text-5xl font-bold text-white mt-3">Make Your Appoinment Today!</h1>
                    <p className="py-6 text-white">SIMORA is dedicated to the functional and aesthetic rehabilitation of the mouth and face. Aware that we have been growing thanks to the recommendations of our patients, we have made every commitment with perfectionism and true dedication, sedimenting the credibility of the patients who are looking for us. If you are one of them make an appoinment.</p>
                    <PrimaryButton>Start Here</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoinment;