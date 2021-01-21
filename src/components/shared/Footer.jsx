import React from 'react'
import {Github} from '../icons'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <span className="footer__description">
                        The web app was built to strengthen ReactJS skills
                    </span>
                    <a className="footer__link" href="https://github.com/webvasenkov">
                        <Github className="icon-gray icon-gray_has-hover"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;