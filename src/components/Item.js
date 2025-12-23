import Overlay from './Overlay';
import '../App.css';

const Item = ({img, title, desc, alt}) => {
    return (
        <div className='item'>
            <img src={img} alt={alt} style={{width:'100%'}}></img>
            <Overlay title={title} desc={desc} />
        </div>
    )
};

export default Item;