import React, { Fragment, Component } from 'react';
import { getUser } from '../../service/users';
import Header from '../../componente/Header';
import Pesquisa from '../../componente/Pesquisa';

import './style.css'

class PaginaInicial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      user: {}
    }
  }

  valorInput = (param) => {
    this.setState({
      value: param.target.value
    })
  }
  pesquisarUser = () => {
    if (this.state.value !== "") {

    getUser(this.state.value).then((response) => {
      this.setState({
        user: response.data
      })
      this.props.history.push({
        pathname: "/Result",
        state: {
          user: this.state.user
        }
      })
    }).catch(error => {
      console.log(error)
      return (
        this.props.history.push({
          pathname: "/Result",
          state: {
            error: 'Not Found'
          }
        })
      )
     });
    }
  };
  

  render() {
    return (
      <Fragment>
        <main className='container'>
          <Header
            classG='Github-Search'
            classS='text-Search'
            title='Github'
            search='Search'
          />
          <Pesquisa
            click={this.pesquisarUser}
            getInputValue={this.valorInput}
          />
        </main>
      </Fragment>
    )
  }
};

export default PaginaInicial