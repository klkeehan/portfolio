import React from 'react';
import Overlay from './Overlay';
import '../App.css';

const Item2 = ({img, title, desc, alt}) => {
    return (
        <div className='item2'>
            <img src={img} height='auto' width='350px' alt={alt}></img>
            <Overlay title={title} desc={desc}/>
        </div>
    );
};

export default Item2;