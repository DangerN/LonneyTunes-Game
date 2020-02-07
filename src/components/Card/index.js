import React from "react"
import "./style.css"
import { tsPropertySignature } from "@babel/types"


function Card(props){
    return(
        <div className="card">
            <div className="img-container">
                <ul>
                    <li>
                        <img alt={props.name} src={props.image}/>
                    </li>
                    </ul>
            </div>
        </div>
    )
}

export default Card