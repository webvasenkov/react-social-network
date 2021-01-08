import React from 'react'
import Avatar from './Avatar'
import Description from './Description'
import Links from './Links'
import Setting from './Setting'
import avatar from "../../assets/img/shared/avatar-1.png";

function About({isSettings}) {

    return (
        <div className="about">
            <div className="about__wrapper">
                <Avatar className="about__avatar-img" avatar={avatar} about/>
                {isSettings
                    ? <Setting/>
                    : <React.Fragment>
                        <Description/>
                        <Links/>
                    </React.Fragment>
                }
            </div>
        </div>
    )
}

export default About;