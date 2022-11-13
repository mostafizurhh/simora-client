import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary bg-gradient-to-l from-primary to-secondary text-white">{children}</button>
        </div>
    );
};

export default PrimaryButton;