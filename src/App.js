import Icons from './components/Icons';
import Development from './components/Development';
import Design from './components/Design';
import home from './images/home.png';
import './App.css';

function App() {
  return (
    <div id='home' className='app'>
      <div className='navbar'>
        <a href='#about' className='nav' style={{backgroundColor: '#F2DADA'}}>about</a>
        <a href='#development' className='nav' style={{backgroundColor: '#F2E9DA', marginLeft: '7rem'}}>dev</a>
        <a href='#design' className='nav' style={{backgroundColor: '#E5E7FA', marginLeft: '12.7rem'}}>design</a>
      </div>
      <a href='#home'><img src={home} className='home' alt='home icon'></img></a>
      <h1>Karissa Keehan</h1>
      <h2>web development & design</h2>
      <Icons />
      <div className='spacer'></div>
      <div id='about' className='container'>
        <p style={{fontSize: '1.5rem'}}>Hi! I'm Karissa, a student at the University of Central Florida studying digital media through the web design track. 
          I have experience with both low-code platforms like WordPress, and with coding sites and applications via HTML, JavaScript, 
          CSS, React, PHP, and MySQL. I really enjoy projects that allow me to write code and create designs. I am experienced 
          in Adobe Suite, Figma, and Canva, and love creating clean, accessible, and engaging designs. I created this site using the 
          React library, CSS styling, and Adobe Illustrator designs. I'm always looking to learn more: I currently work in IT 
          which has further developed my database management and communication skills. Click <a href='https://drive.google.com/file/d/1XM8zkgCWT-3ZdOdirdS15PM3MFZLzJQi/view?usp=sharing' target='_blank' className='link' style={{fontSize: '1.5rem'}}>here</a> to view my resume.<br></br>
        Thank you for visiting my portfolio! <span>☺︎</span></p>
      </div>
      <div className='spacer'></div>
      <Development />
      <div className='spacer'></div>
      <Design /><br></br>
      <p style={{textAlign: 'center'}}>made by karissa ❤︎</p>
    </div>
  );
};

export default App;