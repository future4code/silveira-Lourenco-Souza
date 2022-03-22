import React from 'react';
import './Competencias.css'

let Competencias = (props) => {
    return (
        <div className='competencias-container'>
            {props.items.map((competencia) => {
                return (
                    <ul>
                        <li>{competencia}</li>
                    </ul>
                )
            })}
            
        </div>
    )
}

export default Competencias