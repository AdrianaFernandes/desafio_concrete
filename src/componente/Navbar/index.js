import React, { Fragment } from 'react';
import Header from '../Header'
import Pesquisa from '../Pesquisa'

import './style.css'

const NavBar = props => {
    return (
        <Fragment>
            <main className={props.classNavBar}>
                <Header className='text'
                    classGithub={props.classGithub}
                    classSearch={props.classSearch}
                    title= 'Github'
                    search= 'Search'
                />
                <Pesquisa
                    classInput = {props.classInput}
                    classbutton= {props.classbutton}
                    type={props.type}
                    placeholder={props.placeholder}
                    user={props.user}
                    changeUser={props.changeUser}
                    buttonAction={props.buttonAction}
                />
            </main>
        </Fragment>
    )
}

export default NavBar
