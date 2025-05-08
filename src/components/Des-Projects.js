import React from 'react';
import {motion} from 'motion/react';
import Item2 from './Item2';
import editimg from '../images/carbon-rerouting.jpg';
import catimg from '../images/cat-comic.png';
import skinimg from '../images/skincaread.png';
import albumimg from '../images/strokes-album-poster.jpg';
import songimg from '../images/strokes-lyric-poster.jpg';
import chicimg from '../images/chicago-album.jpg';
import jellyimg from '../images/jellies.jpg';
import windowimg from '../images/window.jpg';
import bhimg from '../images/bh-poster.png';
import todoimg from '../images/todo-list-app.png';
import '../App.css';

const DesProj = () => {
    return (
        <motion.div className='container4' initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}>
            <div className='item2-container'>
                <div className='column'>
                    <Item2 img={editimg} title='Editorial Design' desc='made with Adobe Photoshop' alt='Editorial Design'/>
                    <Item2 img={skinimg} title='Skincare Ad' desc='made with Canva' alt='Skincare Ad'/>
                    <Item2 img={catimg} title='Cat Comic' desc='made with Adobe Illustrator' alt='Cat Comic'/>
                    <Item2 img={bhimg} title='Beach House Tour Poster' desc='made with Adobe Illustrator || Photo by Shawn Brackbill' alt='Beach House Tour Poster'/>
                </div>
                <div classnName='column'>
                    <Item2 img={albumimg} title='The Strokes Room on Fire Poster' desc='made with Adobe Illustrator' alt='The Strokes Room on Fire Poster'/>
                    <Item2 img={jellyimg} title='Jellyfish' desc='made with Adobe Illustrator' alt='Jellyfish'/>
                    <Item2 img={windowimg} title='Window Design' desc='made with Adobe Illustrator' alt='Window Design'/>
                </div>
                <div className='column'>
                    <Item2 img={chicimg} title='Chicago IX Album Cover Redesign' desc='made with Adobe Illustrator' alt='Chicago IX Album Cover Redesign'/>
                    <Item2 img={songimg} title='The Strokes Song Lyric Poster' desc='made with Adobe Illustrator || Style heavily inspired by Jean-Michel Basquiat' alt='The Strokes Song Lyric Poster'/>
                    <Item2 img={todoimg} title='Todo-List App Design' desc='made with Figma' alt='Todo-List App Design'/>
                </div>
            </div>
        </motion.div>
    );
};

export default DesProj;