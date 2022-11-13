import React from 'react';
import chair from '../../assets/images/chair.jpeg';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import './Banner.css'
import ContactCards from './ContactCards';


const Banner = () => {
    return (
        <div className="hero banner w-full h-full bg-no-repeat bg-cover" style={{ backgroundImage: '../../assets/images/chair.jpeg' }}>
            <div>
                <div className="hero-content flex-col md:flex-row-reverse">
                    <img src={chair} className="md:max-w-sm rounded-lg " alt='' />
                    <div>
                        <h1 className="text-5xl font-bold text-white">Smile With Confidence</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
                <ContactCards></ContactCards>
            </div>
        </div>
    );
};

export default Banner;