import React from 'react';
import {motion} from 'motion/react';
import '../App.css';

const AboutPage = () => {
    return (
        <motion.div className='container2' initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}>
            <h1>About Me</h1><br></br>
            <h2>Hi! I'm Karissa, a digital media student at University of Central Florida. I'm studying web design
            through both coding with HTML, Javscript, CSS, PHP, and React, and using no-code programs like Webflow and WordPress.
            I really enjoy taking on creative projects that allow me to work with both code and digital design.
            I'm familiar with and enjoy using Adobe Suite, Figma, and Canva for creating graphics and videos. This site 
            was made using ReactJS and Framer Motion animations!<br></br><br></br>
            Thanks for visiting my portfolio :)</h2>
        </motion.div>
    );
};

export default AboutPage;