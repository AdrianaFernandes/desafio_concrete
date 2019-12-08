import React, { Fragment, Component } from 'react';
import axios from 'axios'
import NavBar from '../../componente/Navbar';

import './style.css'

class PaginaInicial extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: '',
      res: '',
      error: ''
    }
  }

  changeUser = user => {
    this.setState({user: user.target.value})
}
  pesquisarUser = async () => {
    const { user } = this.state
    try {
        const { data: res } = await axios.get(
            `https://api.github.com/users/${user}`
        )
    
        this.setState({res, error: ''})
        this.props.history.push({
            pathname: '/Result',
            state: {
                res
            }
        })    
    } catch (error) {
        this.setState({
            error: 'User not found :(',
            res: ''
        }) 
        this.props.history.push({
            pathname: '/Result',
            state: {
                error: 'User not found :('
            }
        })
    }
}

  render() {
    const { user } = this.state;
    return (
      <Fragment>
        <main className='search'>
        <NavBar 
            classNavBar='navbar_home'
            classGithub='Github-Search'
            classSearch='text-Search'
            type='text'
            // title='Github'
            // search='Search'
            classInput='Input'
            classbutton='button'
            placeholder='Digite aqui um usuário para consultar seus repositórios'
            user={user}
            changeUser={this.changeUser}
            buttonAction={this.pesquisarUser}
            >
          </NavBar>
        </main>
      </Fragment>
    )
  }
};

export default PaginaInicial