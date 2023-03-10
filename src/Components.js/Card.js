import React from 'react'
import './Card.css'


function Card(props){
    
    return(
        <div>
            <img src={props.image} alt={props.name} className="card-image"/>
            <h2>{props.name} </h2>
            <h3>{props.designation} </h3>
            <p>{props.description} </p>
        </div>
    )
}

export default Card;