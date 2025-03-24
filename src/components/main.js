import React from "react";
import ItemGrid from "./grid";
import ProjGrid from "./grid2";
import NavBar from "./navbar";
import '../App.css'

const Port1 = () => {
    return (
        <div className='port'>
            <ItemGrid />
            <h5>Development Projects</h5>
            <ProjGrid />
            <br></br>
            <NavBar />
            <br></br>
            <h3>made with reactJS by karissa</h3>
            <br></br>
        </div>
    );
};

export default Port1;