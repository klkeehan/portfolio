import React from 'react';

const Item2 = ({title, body, link, name}) => {
    return (
        <div className='item2'>
            <h4>{title}</h4>
            <p>{body}</p>
            <br></br>
            <a href={link} className='button2'>{name}</a>
        </div>
    )
};

export default Item2;