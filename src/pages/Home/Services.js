import React from 'react';
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service'
import Treatment from './Treatment';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            image: flouride,
            name: 'Fluoride Treatment',
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay.'
        },
        {
            id: 2,
            image: cavity,
            name: 'Cavity Filling',
            description: 'To treat a cavity your dentist will remove the decayed portion of the tooth and then "fill" the area on the tooth where the decayed material was removed. Fillings are also used to repair cracked or broken teeth.'
        },
        {
            id: 3,
            image: whitening,
            name: 'Teeth Whitening',
            description: "Teeth whitening aims to restore the natural color of the teeth. It should be performed, in-clinic after a clinical and radiological evaluation of the patient's dental and periodontal conditions. Although the natural color of teeth may differ."
        },
    ]
    return (
        <div className='mt-16'>

            <div>
                <h1 className='text-2xl text-secondary font-bold text-center'>Our Services</h1>
                <h2 className='text-4xl text-center'> Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 pb-2'>
                {
                    serviceData.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>
            <Treatment></Treatment>
        </div>
    );
};

export default Services;