import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services'
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;