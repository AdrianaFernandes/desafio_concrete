import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../../componente/Navbar';
import Profile from './components/Profile';
import Repositories from '../Result/components/Repositories/Repositories';
import NotFound from '../../componente/NotFound'

import './style.css'


class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      repos: [],
      res: '',
      error: '',
      value: ''
    }
  }

  changeUser = user => {
    this.setState({ value: user.target.value })
  }
  componentDidMount() {
    if (this.props.location.state){
      if (this.props.location.state.res){
        this.pesquisarUser(this.props.location.state.res.login)
        this.pesquisarRepos(this.props.location.state.res.login)
      }
      if (this.props.location.state.error){
        this.setState({ error: this.props.location.state.error})
      }
    }
  }

  pesquisarRepos = async (user) => {
    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      )

      this.setState({ repos, error: '' })
    } catch (error) {
      this.setState({
        error: 'User not found :(',
        repos: []
      })
    }
    this.pesquisarUser(user)
  }

  pesquisarUser = async (user) => {
    try {
      const { data: response } = await axios.get(
        `https://api.github.com/users/${user}`
      )

      this.setState({ user: response, error: '' })
    } catch (error) {
      this.setState({
        error: 'User not found :(',
        res: ''
      })
    }
  }
  render() {
    const { user, repos, error, value } = this.state;
    return (
      <div className= 'container_results'>
        <Navbar
          classNavBar='navbar_result'
            classGithub='Github-Search'
            classSearch='text-Search'
            type='text'
            title='Github'
            search='Search'
            classInput='Input'
            classbutton='button'
            placeholder='Digite aqui um usuário para consultar seus repositórios'
            user={user}
            changeUser={this.changeUser}
            buttonAction={() => this.pesquisarRepos(value)}
            >
        </Navbar>
        {!error ?
          <div className='content'>
            <Profile
              avatar_url={user.avatar_url}
              name={user.name}
              bio={user.bio}
              company={user.company}
              location={user.location}
              public_repos={user.public_repos}
              followers={user.followers}
              following={user.following}
            />
            <Repositories
              repos={repos}
            />
          </div>
          : <NotFound
            erro={error}
          />
        }
      </div>
    )
  }
}
export default Result