import React from 'react'
import Avatar from './Avatar'
import Description from './Description'
import Links from './Links'

function About() {
    return (
        <div className='about'>
            <div className="about__wrapper">
                <Avatar/>
                <Description/>
                <Links/>
            </div>
        </div>
    )
}

export default About;