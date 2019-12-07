import React from 'react';
import './style.css';
import searchIcon from '../../assets/img/Search Icon.png';

const Pesquisa = (props) => {
    return (
        <div className='search'>
            <input 
            className={props.classInput}
            placeholder ={props.placeholder} 
            type={props.type}
            onChange={props.changeUser}></input>
            <button onClick={props.buttonAction} 
            className={props.classbutton}>
                <img src={searchIcon} alt='search icon'></img>
            </button>
        </div>
    )
}

export default Pesquisa