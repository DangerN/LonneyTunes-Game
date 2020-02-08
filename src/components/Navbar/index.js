import React from "react";
import "./style.css";

function Navbar(props){
    return(
    <div>
    <nav className="navbar navbar-expand-lg">
        <h1>Looney Tunes Click Game!</h1>
        <h4>{props.score} | {props.highscore}</h4>

    </nav>
    </div>
    )
}    

export default Navbar