import React from 'react'
import {Eye, Brain, Briefcase, Settings} from '../icons';
import Avatar from "./Avatar";
import SocialNetworks from './SocialNetworks';

function Description({
                         photos,
                         fullName,
                         profileStatus,
                         lookingForAJob,
                         lookingForAJobDescription,
                         contacts,
                         handleClickSetting,
                         isProfileAuth,
                     }) {
    const lookingJob = lookingForAJob ? 'Looking for a job' : 'Not looking for a job'
    const aboutJob = lookingForAJob &&
        <li className="about__item">
            <span className="about__item-icon"><Eye className="icon-yellow"/></span>
            <span className="about__item-text">{lookingForAJobDescription}</span>
        </li>
    const status = profileStatus || `Doesn't think about anything`
    const settingButton = isProfileAuth &&
        <span className="about__setting-button" onClick={handleClickSetting}>
                    <Settings className="icon-gray icon-gray_has-hover about__setting-icon"/>
        </span>

    return (
        <div className="about__bio">
            <div className="about__bio-photo">
                <Avatar className="about__avatar-img" avatar={photos.large} about/>
            </div>
            <div className="about__bio-description">
                <h3 className="about__name">{fullName}</h3>
                <ul className="about__items">
                    <li className="about__item">
                        <span className="about__item-icon"><Brain className="icon-green"/></span>
                        <span className="about__item-text">{status}</span>
                    </li>
                    <li className="about__item">
                        <span className="about__item-icon"><Briefcase className="icon-purple"/></span>
                        <span className="about__item-text">{lookingJob}</span>
                    </li>
                    {aboutJob}
                </ul>
            </div>
            <SocialNetworks {...contacts}/>
            {settingButton}
        </div>
    )
}

export default Description;