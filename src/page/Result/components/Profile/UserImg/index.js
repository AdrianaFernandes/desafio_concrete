import React from 'react'
import './style.css'

const Avatar = props => {
    const {url_avatar} = props
    console.log(props)
    return (
        <img src={url_avatar} className='Avatar' alt='usuario github'></img>
    )
}

export default Avatar