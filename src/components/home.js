import React from 'react';

const HomePage = ({func}) => {
    return (
        <div className='home'>
            <h1>Karissa Keehan</h1>
            <h2>WEB DESIGN & DEVELOPMENT</h2>
            <button className='button1' onClick={func}>PORTFOLIO</button>
        </div>
    );
};

export default HomePage;