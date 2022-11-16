import React from 'react';
import { Circles } from 'react-loader-spinner'


const Spinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <Circles
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
            />
        </div>
    );
};

export default Spinner;