import React from "react"
import "./style.css"



function Card(props){
    return(
        <div>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col m-1">
                    <div>
                    <div className="card">
                        <img src={props.image} className="card-img-top" alt={props.id} onClick={()=>props.clicked(props.id)}></img>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card