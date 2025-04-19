import React from 'react';
import {motion} from 'motion/react';
import gitLogo from '../images/github-mark.png';
import linkedinLogo from '../images/InBug-Black.png';
import '../App.css';

const Footer = () => {
    return (
        <div className='footer'>
            <a href='https://www.linkedin.com/in/karissa-keehan/'><motion.img src={linkedinLogo} className='icon' alt='LinkedIn logo' whileHover={{scale: 1.2}}></motion.img></a>
            <a href='https://github.com/klkeehan'><motion.img src={gitLogo} className='icon' alt='GitHub logo' whileHover={{scale: 1.2}}></motion.img></a>
        </div>
    );
};

export default Footer;