import React, { Fragment } from 'react';
import Header from '../../../../../componente/Header'
import Pesquisa from '../../../../../componente/Pesquisa'

import './style.css'

const NavBar = props => {
    return (
        <Fragment>
            <main className='container'>
                <Header
                    classG='Github-Search'
                    classS='text-Search'
                    title='Github'
                    search=' Search'
                />
                <Pesquisa
                    click={props.click}
                    getInputValue={props.getInputValue}
                />
            </main>
        </Fragment>
    )
}

export default NavBar
