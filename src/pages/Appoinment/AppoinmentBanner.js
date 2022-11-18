import React from 'react';
import chair from '../../assets/images/chair.jpeg'
import back from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinmentBanner = ({ selectedDate, setselectedDate }) => {


    return (
        <header className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${back}` }}>
            <div className="hero">
                <div className="hero-content mt-10 mb-14 flex-col-reverse md:flex-row">
                    <div className='card bg-base-100 md:mr-1 lg:mr-16'>
                        <DayPicker
                            mode='single'
                            dateSelect={selectedDate}
                            onSelect={setselectedDate}
                            showOutsideDays
                            fixedWeeks
                        />
                    </div>
                    <img src={chair} alt='' className="md:max-w-md lg:max-w-lg rounded-lg" />
                </div>
            </div>
        </header>
    );
};

export default AppoinmentBanner;