import React from 'react';
import {motion} from 'motion/react';
import '../App.css';

const Item = ({img, title, desc, link, lName, alt}) => {
    return (
        <motion.div className='item' whileHover={{}}>
            <img src={img} height='250px' width='auto' alt={alt}></img>
            <h6>{title}</h6>
            <h3>{desc}</h3>
            <a href={link}><motion.button className='nav-button' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>{lName}</motion.button></a>
        </motion.div>
    );
};

export default Item;