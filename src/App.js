import React from 'react';
import {useState} from 'react';
import HomePage from './components/home';
import Port1 from './components/main';
import './App.css';

function App() { 
  let homePg = (
    <div className='app'>
      <HomePage func={portHome}/>
    </div>
  );

  let mainPg = (
    <div>
      <Port1 />
    </div>
  );

  function portHome() {
    setContent(mainPg);
  };

  let [content, setContent] = useState(homePg);

  return (
    <div className="app">
      {content}
    </div>
  );
}

export default App;