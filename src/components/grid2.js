import React from "react";
import Column2 from "./column2";
import '../App.css'

const ProjGrid = () => {
    return (
        <div className='grid'>
            <Column2 title='WRNBT' body='a Twitch chat bot that responds to various utility commands eg. a "define" command that pulls data from a dictionary API' link='https://github.com/klkeehan/wrnbt' name='GitHub Link'/>
            <Column2 title='Tinker Tailor Tea Website' body='a mock website for a tea company made using Webflow, featuring animated elements' link='https://tinker-tailor-tea.webflow.io/' name='Site Link'/>
            <Column2 title='Exercises App' body='a reactJS app with counters and timers for repetition, duration, and lap style exercises' link='https://github.com/klkeehan/exercises-app' name='GitHub Link'/>
        </div>
    );
};

export default ProjGrid;