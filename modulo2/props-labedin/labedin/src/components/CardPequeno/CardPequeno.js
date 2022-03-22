import React from 'react';
import './CardPequeno.css'

let CardPequeno = (props) => {

    return (
        <div className="smallcard-container">
                <img src={ props.imagem } />
                <p><span>{ props.negrito }</span> { props.texto }</p>
            </div>
    )
}

export default CardPequeno