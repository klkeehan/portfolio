import React from "react";
import Item2 from "./item2";

const Column2 = ({title, body, link, name}) => {
    return (
        <div className='column'>
            <Item2 title={title} body={body} link={link} name={name}/>
        </div>
    );
};

export default Column2;