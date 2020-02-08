import React from "react";
import "./style.css";

function Navbar(props){
    return(
    <div>
    <nav className="navbar navbar-expand-lg">
        <h1 className="mr-5">Looney Tunes Click Game!</h1>
        <h2> Score: {props.score} |  Highscore: {props.highscore}</h2>

    </nav>
    </div>
    )
}    

export default Navbar