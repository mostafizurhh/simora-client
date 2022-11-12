import React from 'react';
import chair from '../../assets/images/chair.jpeg';
import './Banner.css'
import ContactCards from './ContactCards';


const Banner = () => {
    return (
        <div>
            <div className="hero banner w-full h-full bg-no-repeat bg-cover" style={{ backgroundImage: '../../assets/images/chair.jpeg' }} >
                <div className="hero-content flex-col md:flex-row-reverse">
                    <img src={chair} className="md:max-w-sm rounded-lg " alt='' />
                    <div>
                        <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-teal-300 to-teal-400 text-white">Get Started</button>
                    </div>
                </div>
            </div>
            <ContactCards></ContactCards>
        </div>
    );
};

export default Banner;