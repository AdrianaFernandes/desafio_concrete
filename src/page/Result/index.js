import React, { Fragment, Component } from 'react';
import { getUser, getRepos } from '../../service/users';
import Navbar from '../Result/components/Profile/Navbar';
import Profile from './components/Profile';
import Repositories from '../Result/components/Repositories/Repositories';
import IconTitle from '../Result/components/Profile/IconTitle';

import './style.css'

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: '',
      repos: [],
      user: {}
    }
  }
  componentDidMount() {
    this.pesquisaRepos(this.props.location.state.user.login);
    this.setState({
      user: this.props.location.state.user
    })
  }
  pesquisarUser = (valor) => {
    getUser(valor).then(response => {
      this.setState({
        user: response.data
      })
    })
  }
  pesquisarRepos = (name) => {
    getRepos(name).then(response => {
      this.setState({
        repos: response.data
      })
    })
  }

  valorInput = e => {
    this.setState({
      value: e.target.value
    });
  }
  pesquisarUser = e => {
    this.pesquisarUser(this.state.value);
    this.pesquisarRepos(this.state.value);

  }
  render() {
    const { url_avatar, name, login, company, location, public_repos, followers, following } = this.state.user
    return (
      <Fragment>
        <main className='container'>
          <Navbar
            click={this.pesquisarUser}
            getInputValue={this.valorInput}
          />
        </main>
        <section>
          <Profile
            url_avatar={url_avatar}
            user_name={name}
            user_login={login}
            textOrganization={company}
            textLocation={location}
            textStar={followers}
            textRepositories={public_repos}
            textFollowers={following}
          />
          <div>
            {this.state.repos.map(repo =>
              <Fragment key={repo.id}>
                <Repositories
                  repoName={repo.name}
                  repoDescription={repo.description}
                />
                <IconTitle classIcon='icon__repositories' >
                  {repo.stargazers_count}
                </IconTitle>
              </Fragment>
            )}
          </div>
        </section>
      </Fragment>
    )
  }
};

export default Result