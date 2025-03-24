import React from "react";
import mail from '../mail.png';
import gitLogo from '../github-mark-white.png';
import linkedinLogo from '../InBug-White.png';
import '../App.css'

const NavBar = () => {
    return (
        <div className='nav2'>
            <a href='https://www.linkedin.com/in/karissa-keehan/'><img src={linkedinLogo} className='icon' width='40px' height='auto' alt='linkedin logo'></img></a>
            <a href='https://github.com/klkeehan'><img src={gitLogo} className='icon' width='40px' height='auto' alt='github logo'></img></a>
            <a href='mailto:klkeehan@gmail.com'><img src={mail} className='icon' width='40px' height='auto' alt='mail icon'></img></a>
        </div>
    );
};  

export default NavBar;