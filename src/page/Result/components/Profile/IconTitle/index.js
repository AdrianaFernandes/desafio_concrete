import React from 'react'
import './style.css'
const IconTitle = (props) => {
    const {icon, alt, children} = props
    return (
        <div>
            <img src={icon} alt={alt}></img>
            <p>{children}</p>
        </div>
    )
}

export default IconTitle

