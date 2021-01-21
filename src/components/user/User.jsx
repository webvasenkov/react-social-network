import React from 'react'
import {Eye, EyeOpen} from '../icons'
import defaultAvatar from '../../assets/img/defaultAvatar.png'
import {NavLink} from 'react-router-dom'
import Avatar from './Avatar';
import Preloader from '../shared/Preloader';

function User({name, id, photos, status, followed, handlerFollow, handlerUnfollow, statusFollows}) {
    function handlerClickFollow() {
        handlerFollow(id)
    }

    function handlerClickUnfollow() {
        handlerUnfollow(id)
    }

    const linkToUser = `users/${id}`
    const preloader = statusFollows.some(userId => userId === id) && <><Preloader/> <span className="users-page__status-follows"/></>

    return (
        <li className="user users-page__user">
            <div className="user__wrapper">
                {preloader}
                <NavLink to={linkToUser}>
                    <Avatar className="users-page__avatar-img" avatar={photos.small || defaultAvatar} margin15/>
                </NavLink>
                <div className="user__info">
                    <NavLink to={linkToUser}>
                        <h3 className="user__name users-page__user-name">{name}</h3>
                    </NavLink>
                    <p className="user__looking-job">
                        {status || 'Not looking for work'}
                    </p>
                </div>
                {followed
                    ? <button className="user__button user__unfollow-button" onClick={handlerClickUnfollow}>
                        <EyeOpen className="icon-green"/>
                    </button>
                    : <button className="user__button user__follow-button" onClick={handlerClickFollow}>
                        <Eye className="icon-gray icon-gray_has-hover"/>
                    </button>
                }
            </div>
        </li>
    )
}

export default User;