import React from 'react';
import Overlay from './overlay';

const Item = ({pic, alt, title, desc}) => {
    return (
        <div className='item'>
            <img src={pic} alt={alt}></img>
            <Overlay title={title} desc={desc}/>
        </div>
    )
};

export default Item;