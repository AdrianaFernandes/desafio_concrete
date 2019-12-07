import React from 'react'
import IconTitle from '../../../../componente/IconTitle'
import Description from '../../../../componente/Description'
import Star from '../../../../assets/img/star icon.png'



const Repositories = props => {
    const {repos }  = props
    return (
        <div>
        {repos.sort(function (a, b) {return b.stargazers_count - a.stargazers_count}).map(repo => (
                <div className='c_repos'>
                <Description
                        title={repo.name}
                        description={repo.description}
                        classTitle='repositories-title'
                        classParagraph='repositories-paragraph'
                    ></Description>
                    <IconTitle
                        icon={Star}
                        alt='organization icon'
                        classIcon='icon-repositories'
                        >{repo.stargazers_count}</IconTitle>
                </div>
            ))}
        </div>
    )
}

export default Repositories