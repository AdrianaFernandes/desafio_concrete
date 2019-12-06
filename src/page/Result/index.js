import React, { Fragment, Component } from 'react';
import { getUser, getRepos } from '../../service/users';
import Navbar from '../Result/components/Profile/Navbar';
import Profile from './components/Profile';
import Repositories from '../Result/components/Repositories/Repositories';
import IconTitle from '../Result/components/Profile/IconTitle';
import NotFound from './components/Profile/NotFound'

import './style.css'


class Result extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      error: '',
      repos: [],
      user: {}
    }
  }
  componentDidMount(){   
    if(this.props.location.state){
         if(this.props.location.state.user)  {
             this.pesquisarRepos(this.props.location.state.user.login)
             this.setState({
                 user: this.props.location.state.user,
             })

         }  
         if(this.props.location.state.error){
             this.setState({
                 error: 'Not found '
             })
         }
      }
 }

  pesquisarUser = (value) => {
    getUser(value).then(response => {
      this.setState({
        user: response.data
      })
    })
      // .catch((err) => {
      //   this.setState({
      //     error: 'Not found'
      //   })
      // })
  }
  pesquisarRepos = (value) => {
    getRepos(value).then(response => {
      this.setState({
        repos: response.data
      })
    })
      // .cath((err) => {

      // })
  }

  valorInput = e => {
    this.setState({
      value: e.target.value
    });
  }

  pesquisarUser = e =>{
        this.searchUser(this.state.value);
        this.searchRepos(this.state.value);
    } 
  render() {
    const { url_avatar, name, login, company, location, public_repos, followers, following } = this.state.user
    return (
      <Fragment>

        <Navbar
          getInputValue={this.valorInput}
          click={this.pesquisarUser}
        />
            {this.state.error !== '' ?     
            <div className= 'results_container'>          
                <Profile url_avatar={url_avatar}
                user_name= {name}
                user_login= {login}
                textOrganization={company}
                textLocation={location}
                textStar={followers}
                textRepositories={public_repos}
                textFollowers={following}
                /> 
                <div>
                    {this.state.repos.map(repo =>                     
                        <Fragment  key= {repo.id}>
                        <Repositories
                         repoName= {repo.name}
                         repoDescription={repo.description}                
                        />                 
                        <IconTitle classIcon ='icon__repositories' >
                         {repo.stargazers_count}
                        </IconTitle>
                        </Fragment>                  
                      )}
                </div>                
            </div>
            : <NotFound /> }
        </Fragment>           
        )
    }
}       
export default Result