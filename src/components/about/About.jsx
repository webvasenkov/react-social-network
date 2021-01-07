import React from 'react'
import Avatar from './Avatar'
import Description from './Description'
import Links from './Links'
import Settings from './Settings'

function About({isSettings}) {

    return (
        <div className='about'>
            <div className="about__wrapper">
                <Avatar/>
                {isSettings
                    ? <Settings/>
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