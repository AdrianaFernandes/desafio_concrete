import React from 'react'
import IconTitle from '../Profile/IconTitle'
import Description from '../Profile/Description'
import Star from '../../../../assets/img/star icon.png'



const Repositories = props => {
    const {repoName, repoDescription, children }  = props
    return (
        <div>            
                <div className='c_repos'>
                    <Description
                        user_name= {repoName}
                        user_login= {repoDescription}
                        description_title='repos_title'
                        description_p='repos_p'
                    ></Description>
                    <div>
                    <IconTitle
                        icon={Star}
                        alt='organization icon'
                        classIcon='icon-repositories'
                    >{children}</IconTitle>
                    </div>
                </div>            
        </div>
    )
}

export default Repositories