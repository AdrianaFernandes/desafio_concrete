import React from 'react'
import Description from '../../../../componente/Description';
import IconTitle from '../../../../componente/IconTitle';
import UserImg from '../../../../componente/UserImg/UserImg';
import Organization from '../../../../assets/img/organization icon.png';
import Location from '../../../../assets/img/location icon.png';
import Repositories from '../../../../assets/img/repositorie icon.png';
import Followers from '../../../../assets/img/followers icon.png';

const Profile = props => {
    const { avatar_url, name, bio, company, location, public_repos, followers, following } = props
    return (
        <div>
            <UserImg
                avatar_url={avatar_url}
            />
            <Description
                title={name}
                description={bio}
                classTitle='profile-title'
                classParagraph='profile-paragraph'
            />
            <div className='icon-box'>
                {company ?
                    <IconTitle
                        icon={Organization}
                        alt='organization icon'
                        class_icon='icon'
                    >{company}</IconTitle> :
                    null}
                {location ?
                    <IconTitle
                        icon={Location}
                        alt='location icon'
                        class_icon='icon'
                    >{Location}</IconTitle> :
                    null}
                {public_repos ?
                    <IconTitle
                        icon={Repositories}
                        alt='repositories icon'
                        class_icon='icon'
                    >{public_repos}</IconTitle> :
                    null}
                {followers ?
                    <IconTitle
                        icon={Followers}
                        alt='followers icon'
                        class_icon='icon'
                    >{followers}</IconTitle> :
                    null}
                {following ?
                    <IconTitle
                        icon={Followers}
                        alt='followers icon'
                        class_icon='icon'
                    >{followers}</IconTitle> :
                    null}
            </div>
        </div>
    )
}

export default Profile
