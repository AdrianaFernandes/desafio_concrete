import React from 'react'
import Description from './Description';
import IconTitle from './IconTitle';
import UserImg from './UserImg';
import Star from '../../../../assets/img/star icon.png';
import Organization from '../../../../assets/img/organization icon.png';
import Location from '../../../../assets/img/location icon.png';
import Repositories from '../../../../assets/img/repositorie icon.png';
import Followers from '../../../../assets/img/followers icon.png';

const Profile = props =>{
    const {url_avatar, user_name, user_login, textOrganization, textLocation, textStar, textRepositories, textFollowers } = props
    return(
        <div className='c_profile'>
            <UserImg
            url_avatar={url_avatar}
            />
            <Description
            description_title='user__name'
            description_P= 'user__login'
            user_name= {user_name}
            user_login={user_login}
            />
            <IconTitle
            icon={Organization}
            alt= 'organization icon'
            class_icon='icon'
            children= {textOrganization}
            />
            <IconTitle
            icon={Location}
            alt= 'location icon'
            class_icon='icon'
            children= {textLocation}
            />
            <IconTitle
            icon={Star}
            alt= 'star icon'
            class_icon='icon'
            children= {textStar}
            />
            <IconTitle
            icon={Repositories}
            alt= 'repositories icon'
            class_icon='icon'
            children= {textRepositories}
            />
            <IconTitle
            icon={Followers}
            alt= 'followers icon'
            class_icon='icon'
            children= {textFollowers}
            />
            
        </div>
    )
}

export default Profile
