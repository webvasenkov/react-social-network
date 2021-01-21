import React from 'react'
import {Instagram, Facebook, Twitter} from '../icons'

function SocialNetworks({instagram, facebook, twitter}) {
    return (
        <ul className="about__social-networks">
            <li className="about__social-network">
                <a className="about__social-network-link" href={instagram}>
                    <Instagram className="icon-gray icon-gray_has-hover"/>
                </a>
            </li>
            <li className="about__social-network">
                <a className="about__social-network-link" href={facebook}>
                    <Facebook className="icon-gray icon-gray_has-hover"/>
                </a>
            </li>
            <li className="about__social-network">
                <a className="about__social-network-link" href={twitter}>
                    <Twitter className="icon-gray icon-gray_has-hover"/>
                </a>
            </li>
        </ul>
    )
}

export default SocialNetworks;