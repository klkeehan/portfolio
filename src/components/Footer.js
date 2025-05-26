import React from 'react';
import {motion} from 'motion/react';
import gitLogo from '../images/github-mark-white.png';
import linkedinLogo from '../images/InBug-White.png';
import mailicon from '../images/mail.png';
import '../App.css';

const Footer = () => {
    return (
        <div className='footer'>
            <a href='https://www.linkedin.com/in/karissa-keehan/'><motion.img src={linkedinLogo} className='icon' alt='LinkedIn logo' whileHover={{scale: 1.2}}></motion.img></a>
            <a href='https://github.com/klkeehan'><motion.img src={gitLogo} className='icon' alt='GitHub logo' whileHover={{scale: 1.2}}></motion.img></a>
            <a href='mailto:klkeehan@gmail.com'><motion.img src={mailicon} className='icon' alt='mail icon' whileHover={{scale: 1.2}}></motion.img></a>
        </div>
    );
};

export default Footer;