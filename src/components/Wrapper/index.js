import React from "react";
import "./style.css"

function Wrapper(props){

    return (
    <div className="container text-center">
        <div className="row">
            {props.children}
        </div>
    </div>
    )
}
export default Wrapper;