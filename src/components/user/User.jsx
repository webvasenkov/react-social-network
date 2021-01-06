import React from 'react'
import eye from '../../assets/img/shared/eye.svg'

function User({avatar, name, isLookingJob, lookingJob}) {
    return (
        <li className="user user-page__user">
            <div className="user__wrapper">
                <div className="avatar user__avatar">
                    <img className="avatar__img user-page__user-img" src={avatar} alt="avatar"/>
                </div>
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