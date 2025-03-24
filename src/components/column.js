import React from "react";
import Item from "./item";

const Column = ({pic01, alt01, title01, desc01, pic02, alt02, title02, desc02, pic03, alt03, title03, desc03, pic04, alt04, title04, desc04}) => {
    return (
        <div className='column'>
            <Item pic={pic01} alt={alt01} title={title01} desc={desc01}/>
            <Item pic={pic02} alt={alt02} title={title02} desc={desc02}/>     
            <Item pic={pic03} alt={alt03} title={title03} desc={desc03}/>
            <Item pic={pic04} alt={alt04} title={title04} desc={desc04}/>
        </div>
    );
};

export default Column;