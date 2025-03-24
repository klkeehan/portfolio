import React from "react";
import Column from "./column";
import '../App.css'
// file imports
import jellies from '../jellies.jpg';
import chicagoalbum from '../chicago-album.jpg';
import bhposter from '../bh-poster.png';
import carbonreroute from '../carbon-rerouting.jpg';
import catcomic from '../cat-comic.png';
import strokesalbum from '../strokes-album-poster.jpg';
import strokessong from '../strokes-lyric-poster.jpg';
import window from '../window.jpg';
import todolist from '../todo-list.png';
import skinad from '../skincaread.png';

const ItemGrid = () => {
    return (
        <div className='grid'>
            <Column
                pic01={strokesalbum} alt01='strokes album poster' title01='The Strokes Room on Fire Poster' desc01='made with Adobe Illustrator' 
                pic02={jellies} alt02='jellyfish art' title02='Jellyfish Art' desc02='made with Adobe Illustrator'
                pic03={window} alt03='window design' title03='Window Design' desc03='made with Adobe Illustrator'
            />
            <Column
                pic01={chicagoalbum} alt01='chicago album redesign' title01='Chicago IX Album Cover Redesign' desc01='made with Adobe Illustrator'
                pic02={strokessong} alt02='strokes song poster' title02='The Strokes Song Lyric Poster' desc02='made with Adobe Illustrator || Style heavily inspired by Jean-Michel Basquiat'
                pic03={todolist} alt03='todo-list app design' title03='Todo-List App Design' desc03='made with Figma'
            />
            <Column 
                pic01={carbonreroute} alt01='editorial design for carbon rerouting' title01='Editorial Design' desc01='made with Adobe Photoshop'
                pic02={skinad} alt02='skincare ad' title02='Skincare Promotion' desc02='made with Canva'
                pic03={catcomic} alt03='5 panel cat comic' title03='Cat Comic' desc03='made with Adobe Illustrator'
                pic04={bhposter} alt04='beach house tour poster' title04='Beach House Tour Poster' desc04='made with Adobe Illustrator || Photo by Shawn Brackbill'
            />
        </div>
    );
};

export default ItemGrid;