import React from 'react';
import {motion} from 'motion/react';
import Item from './Item';
import exerimg from '../images/exer-app.png';
import todoimg from '../images/todo-app.jpg';
import '../App.css';

const ProjPage = () => {
    return (
        <motion.div className='container3' initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}>
            <div className='item-container'>
                <Item img={exerimg} title='Exercise App' desc='a reactJS app with counters and timers for repetition, duration, and lap style exercises' link='https://github.com/klkeehan/exercises-app' lName='GitHub Repo' alt='Exercise App'/>
                <Item img={todoimg} title='To-Do App' desc='a react native app where you can add and remove tasks from a list' link='https://github.com/klkeehan/todo-list' lName='GitHub Repo' alt='To-Do App'/>
            </div>
        </motion.div>
    );
};

export default ProjPage;