import React from 'react';

const UserImg = (props) => {
    const { avatar_url } = props
    return (
        <img src={avatar_url} className='Avatar' alt='usuario github'></img>
    )
}

export default UserImg