import React from 'react'
import './style.css'

function Avatar(props){
    return(
        <div className=''>
            <img src={props.profile}/>
        </div>

    )
}
export default Avatar