import React from 'react';


const NotFound = (props) => { 
    const { erro } = props
    return (
        <h1>{erro}</h1> 
    )
}

export default NotFound