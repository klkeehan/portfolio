import { useState } from 'react';
import Icons from './components/Icons';
import Development from './components/Development';
import Design from './components/Design';
import Contact from './components/Contact';
import home from './images/home.png';
import './App.css';

function App() {
  const [flag, setFlag] = useState(1); // 0=disabled 1=enabled

  function animationToggle() {
    let toggle = document.getElementById('ani-toggle');
    let body = document.getElementById('home');

    if (flag == 1) {
      body.classList.toggle('dis-ani')
      console.log('disabled');
      toggle.innerHTML = 'enable animations'
      setFlag(0);
    }
    if (flag == 0) {
      body.classList.toggle('dis-ani')
      toggle.innerHTML = 'disable animations'
      setFlag(1);
    }
  }

  return (
    <div id='home' className='app'>
      <div className='navbar'>
        <a href='#about' className='nav' style={{backgroundColor: '#8DD1EE'}}>about</a>
        <a href='#development' className='nav' style={{backgroundColor: '#D9FFFD', marginLeft: '100px'}}>dev</a>
        <a href='#design' className='nav' style={{backgroundColor: '#A5E5E5', marginLeft: '180px'}}>design</a>
        <a href='#contact' className='nav' style={{backgroundColor: '#D8F0DC', marginLeft: '290px'}}>contact</a>
      </div>
      <a href='#home'><img src={home} className='home' alt='home icon'></img></a>
      <h1>Karissa Keehan</h1>
      <h2>web development & design</h2>
      <Icons />
      <button className='btn' id='ani-toggle' onClick={animationToggle}>disable animations</button>
      <div className='spacer'></div>
      <div id='about' className='container'>
        <h2>about me</h2>
        <p style={{fontSize: '1.5rem'}}>Hi! I'm Karissa, a student at the University of Central Florida studying digital media through the web design track. I have experience with both low-code platforms like WordPress, and with coding sites and applications via HTML, JavaScript, CSS, React, PHP, and more. Frontend development using React is particularly enjoyable to me, and I'm always engaged by the CSS-based design process. 
          I really enjoy projects that allow me to write code and create designs. I have experience with Adobe Suite and Canva, and love creating clean, accessible, and engaging content.
          <br></br><br></br>I created this site using React and CSS styling. I'm always looking to learn more: I currently work in IT which has further developed my problem solving and communication skills. Click <a href='https://docs.google.com/document/d/1sbVylOuno8qSkcgz9LmmudVH9kB9vhwJNgjFJi7RMIc/edit?usp=sharing' target='_blank' className='link' style={{fontSize: '1.5rem'}}>here</a> to view my resume.<br></br><br></br>
          Thank you for visiting my portfolio! <span>☺︎</span></p>
      </div>
      <div className='spacer'></div>
      <Development />
      <div className='spacer'></div>
      <Design /><br></br>
      <div className='spacer'></div>
      <Contact /><br></br>
      <p style={{textAlign: 'center'}}>made by karissa ❤︎</p>
    </div>
  );
};

export default App;