import React from 'react';
import './style.css';

const Header = (props) => {
    return (
        <div>
            <h1 className={props.classGithub}>{props.title}<span className={props.classSearch}> {props.search}</span>
            </h1>            
        </div>
    )
}

export default Header