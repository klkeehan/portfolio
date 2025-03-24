import React from 'react';

const Overlay = ({title, desc}) => {
    return (
        <div className='overlay'>
            <p className='title'>{title}</p>
            <p className='desc'>{desc}</p>
        </div>
    )
};

export default Overlay;