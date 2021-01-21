import React from 'react'
import classNames from 'classnames'
import defaultAvatar from '../../assets/img/defaultAvatar.png'

function Avatar({className, avatar, about, edit, margin10, margin15}) {
    return (
        <div className={classNames("avatar", {
            "about__avatar": about,
            "about__avatar_edit-mode": edit,
            "avatar_margin-10": margin10,
            "avatar_margin-15": margin15,
        })}>
            <img className={classNames("avatar__img", className)} src={avatar || defaultAvatar} alt="avatar"/>
        </div>
    )
}

export default Avatar;