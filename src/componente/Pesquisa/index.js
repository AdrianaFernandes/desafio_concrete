import React from 'react';
import './style.css';
import searchIcon from '../../assets/img/Search Icon.png';

const Pesquisa = (props) => {
    return (
        <div className='search'>
            <input className='Search-Input' 
            placeholder ={props.msg} type="text" onChange={props.getInputValue}></input>
            <button onClick={props.click}>
                <img src={searchIcon} alt='search icon'></img>
            </button>
        </div>
    )
}

export default Pesquisa