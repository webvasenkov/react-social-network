import React from 'react'
import {NavLink} from 'react-router-dom';
import Avatar from '../../user/Avatar';
import {Logout} from '../../icons'

function User({authLogout}) {
    return (
        <div className="header__user">
            <NavLink className="user" to="/home">
                <div className="user__wrapper">
                    <Avatar margin15/>
                    <h3 className="user__name">Julia</h3>
                </div>
            </NavLink>

            <span className="header__logout-button" onClick={() => authLogout()}>
                <Logout className="icon-gray icon-gray_has-hover"/>
            </span>
        </div>
    )
}

export default User;

