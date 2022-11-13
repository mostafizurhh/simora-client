import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const Treatment = () => {
    return (
        <div className="hero mt-20">
            <div className="hero-content md:p-8 flex-col lg:flex-row">
                <div className='lg:w-1/2'>
                    <img src={treatment} className="rounded-lg" alt='' />
                </div>
                <div className='text-justify lg:px-20 mt-10 lg:mt-0 lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. It consists of the study, diagnosis, prevention, management, and treatment of diseases, disorders, and conditions of the mouth, most commonly focused on dentition as well as the oral mucosa.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Treatment;