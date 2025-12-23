import Item from './Item';
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

const Design = () => {
    return (
      <div id='design' className='container'>
        <h2>design</h2>
        <div className='proj2-grid'>
          <div className='column'>
            <Item img={editimg} alt='Editorial Design' title='Editorial Design' desc='made with Adobe Photoshop'/>
            <Item img={skinimg} alt='Skincare Ad' title='Skincare Ad' desc='made with Canva'/>
            <Item img={catimg} alt='Cat Comic' title='Cat Comic' desc='made with Adobe Illustrator'/>
            <Item img={bhimg} alt='Beach House Tour Poster' title='Beach House Tour Poster' desc='made with Adobe Illustrator | Photo by Shawn Brackbill'/>
          </div>
          <div className='column'>
            <Item img={albumimg} alt='The Strokes Room on Fire Poster' title='The Strokes Room on Fire Poster' desc='made with Adobe Illustrator'/>
            <Item img={jellyimg} alt='Jellyfish' title='Jellyfish' desc='made with Adobe Illustrator'/>
            <Item img={windowimg} alt='Window Design' title='Window Design' desc='made with Adobe Illustrator'/>
          </div>
          <div className='column'>
            <Item img={chicimg} alt='Chicago IX Album Cover Redesign' title='Chicago IX Album Cover Redesign' desc='made with Adobe Illustrator | Chicago logo created by John Berg'/>
            <Item img={songimg} alt='The Strokes Song Lyric Poster' title='The Strokes Song Lyric Poster' desc='made with Adobe Illustrator | following the album cover style created by Jean-Michel Basquiat'/>
            <Item img={todoimg} alt='To-Do List App Design' title='To-Do List App Design' desc='made with Figma'/>
          </div>
        </div>
      </div>
    );
};

export default Design;