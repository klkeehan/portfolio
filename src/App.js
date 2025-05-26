import {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './components/About';
import ProjPage from './components/Projects';
import DesProj from './components/Des-Projects';
import './App.css';

function App() {
  let homePg = (
    <div className='container'>
      <h5>Karissa Keehan</h5>
      <p className='h7'>web development & design</p>
    </div>
  );

  let [content, setContent] = useState(homePg);

  let aboutPg = (
    <div>
      <AboutPage />
    </div>
  );

  function portAbout() {
    setContent(aboutPg);
  };

  let projPg = (
    <div>
      <ProjPage />
    </div>
  );

  function portProj() {
    setContent(projPg);
  };

  let desPg = (
    <div>
      <DesProj />
    </div>
  );

  function portDes() {
    setContent(desPg);
  };

  return (
    <div className='app'>
      <Header func1={portAbout} func2={portProj} func4={portDes}/>
      {content}
      <Footer />
    </div>
  );
};

export default App;
