import React from 'react';
import {motion} from 'motion/react';
import '../App.css';

const Item = ({img, title, desc, link, lName, alt}) => {
    return (
        <motion.div className='item' whileHover={{}}>
            <img src={img} className='image' alt={alt}></img>
            <h1>{title}</h1>
            <h3>{desc}</h3>
            <a href={link}><motion.button className='nav-button' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>{lName}</motion.button></a>
        </motion.div>
    );
};

export default Item;