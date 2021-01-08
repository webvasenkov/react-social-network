import React from 'react'
import eye from '../../assets/img/shared/eye.svg'
import Avatar from "./Avatar";

function User({avatar, name, isLookingJob, lookingJob}) {
    return (
        <li className="user user-page__user">
            <div className="user__wrapper">
                <Avatar className="user-page__avatar-img" avatar={avatar}/>
                <div className="user__info">
                    <h3 className="user__name user-page__user-name">{name}</h3>
                    <p className="user__looking-job">
                        {isLookingJob ? lookingJob : 'Not looking for work'}
                    </p>
                </div>
                {isLookingJob && <img className="user__is-looking-job" src={eye} alt="is-looking-job"/>}
            </div>
        </li>
    )
}

export default User;