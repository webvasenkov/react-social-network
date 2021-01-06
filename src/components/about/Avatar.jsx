import React from 'react'
import avatar from "../../assets/img/shared/avatar-1.png";

function Avatar() {
    return (
        <div className="avatar about__avatar">
            <img className="avatar__img about__avatar-img" src={avatar} alt="avatar"/>
        </div>
    )
}

export default Avatar;