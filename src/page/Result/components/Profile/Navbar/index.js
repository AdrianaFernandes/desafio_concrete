import React, { Fragment } from 'react';
import Header from '../../../../../componente/Header'
import Pesquisa from '../../../../../componente/Pesquisa'

import './style.css'

const NavBar = props => {
    return (
        <Fragment>
            <main className='Group'>
                <Header
                    classG='Github-Search_Result'
                    classS='text-Search_Result'
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
