const Overlay = ({title, desc}) => {
    return (
        <div className='overlay'>
            <div className='label-container'>
                <p className='h9'>{title}</p>
                <h3>{desc}</h3>
            </div>
        </div>
    );
};

export default Overlay;