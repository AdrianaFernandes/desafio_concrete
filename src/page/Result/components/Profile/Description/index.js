import React from 'react'
import './style.css'

const Description = (props) => {
    const{name, login}=props;
    return (
    <div>
        <h2>{name}</h2>
        <p>{login}</p>
    </div>
    )
}

export default Description