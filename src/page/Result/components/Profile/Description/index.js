import React from 'react'
import './style.css'

const Description = props => {
    const { user_name, description_P, user_login, description_title } = props
    return (
        <div>
            <h3 className={description_title}>{user_name}</h3>
            <p className={description_P}>{user_login}</p>
        </div>
    )
}

export default Description