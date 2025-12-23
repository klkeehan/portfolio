import '../App.css';

const Overlay = ({title, desc}) => {
    return (
        <div className='overlay'>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
};

export default Overlay;