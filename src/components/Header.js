import React from 'react';
import {motion} from 'motion/react';
import '../App.css';

const Header = ({func1, func2, func4}) => {
    return (
        <div className='header'>
            <motion.button className='nav-button' onClick={func1} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>about</motion.button>
            <motion.button className='nav-button' onClick={func2} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>development</motion.button>
            <motion.button className='nav-button' onClick={func4} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>design</motion.button>
        </div>
    );
};

export default Header;