import Icons from './components/Icons';
import Development from './components/Development';
import Design from './components/Design';
import home from './images/home.png';
import './App.css';

function App() {

  return (
    <div id='home' className='app'>
      <a href='#about' className='nav'>about</a>
      <a href='#development' className='nav'>development</a>
      <a href='#design' className='nav'>design</a>
      <a href='#home'><img src={home} className='home' alt='home icon'></img></a>
      <h1>Karissa Keehan</h1>
      <h2>web development & design</h2>
      <Icons />
      <div id='about' className='container' initial={{opacity: 0}} whileInView={{opacity: 1}}>
        <h2>about me</h2>
        <h3>Hi! I'm Karissa, a student at the University of Central Florida studying digital media through the web design track. 
          I have experience with both low-code platforms like WordPress, and with coding sites and applications via HTML, JavaScript, 
          CSS, React, PHP, and MySQL. I really enjoy projects that allow me to write code and craft designs. I am experienced 
          in Adobe Suite, Figma, and Canva, and love creating clean, accessible, and engaging designs. I created this site using the 
          React library, CSS styling, and Adobe Illustrator designs. I'm always looking to learn more: I currently work in IT 
          which has further developed my database management and communication skills. Click <a href='https://drive.google.com/file/d/1TLgSXO3txmMI8Z5afc1iUdABlCJZSFc4/view?usp=sharing' target='_blank' className='link'>here</a> to view my resume.<br></br><br></br>
        Thank you for visiting my portfolio! <span>☺︎</span></h3>
      </div>
      <Development />
      <Design />
    </div>
  );
};

export default App;