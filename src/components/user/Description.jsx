import React from 'react'
import brain from "../../assets/img/about/brain.svg";
import briefcase from "../../assets/img/about/briefcase.svg";
import eye from "../../assets/img/about/eye.svg";

function Description() {
    return (
        <div className="about__bio">
            <h3 className="about__name">Julia Harris</h3>
            <ul className="about__items">
                <li className="about__item">
                    <img className="about__item-icon" src={brain} alt="brain"/>
                    <span className="about__item-text">Doesn't think about anything</span>
                </li>
                <li className="about__item">
                    <img className="about__item-icon" src={briefcase} alt="briefcase"/>
                    <span className="about__item-text">Looking for a job</span>
                </li>
                <li className="about__item">
                    <img className="about__item-icon" src={eye} alt="eye"/>
                    <span className="about__item-text">Frontend Developer</span>
                </li>
            </ul>
        </div>
    )
}

export default Description;