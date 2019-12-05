import React from 'react';
import './style.css';

function Header(props) {
    return (
        <div>
            <h1 className={props.classG}> {props.title}<span className={props.classS}> {props.search}</span>
            </h1>            
        </div>
    )
}

export default Header