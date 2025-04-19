import React from 'react';

const Overlay = ({title, desc}) => {
    return (
        <div className='overlay'>
            <div className='label-container'>
                <h6>{title}</h6>
                <h3>{desc}</h3>
            </div>
        </div>
    );
};

export default Overlay;