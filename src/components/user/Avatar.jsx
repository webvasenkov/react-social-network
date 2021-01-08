import React from 'react'
import classNames from 'classnames'

function Avatar({className, avatar, about}) {
    return (
        <div className={classNames("avatar", {"about__avatar": about})}>
            <img className={classNames("avatar__img", className)} src={avatar} alt="avatar"/>
        </div>
    )
}

export default Avatar;