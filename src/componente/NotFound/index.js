import React, { Fragment } from 'react'


const NotFound = (props) => {
    const { erro } = props
    return (
        <Fragment>
            <span className='notfound'>
                {erro}
            </span>
        </Fragment>
    )
}

export default NotFound