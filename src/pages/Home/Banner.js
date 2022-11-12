import React from 'react';
import chair from '../../assets/images/chair.jpeg';
import './Banner.css'


const Banner = () => {
    return (
        <div className="hero banner w-full h-full bg-no-repeat bg-cover" style={{ backgroundImage: '../../assets/images/chair.jpeg' }} >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-teal-300 to-teal-400 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;