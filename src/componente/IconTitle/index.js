import React from 'react'
import './style.css'
const IconTitle = (props) => {
    return (
        <div className='icon_icon'>
            <img className={props.classIcon} 
            src={props.icon} alt={props.alt}></img>
            <p className='icon__text'>{props.children}</p>
        </div>
    )
}

export default IconTitle

