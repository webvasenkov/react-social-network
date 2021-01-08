import React from 'react'
import Logo from '../Logo'
import Navigation from './Navigation'
import User from './User'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Logo/>
                    <Navigation/>
                    <User/>
                </div>
            </div>
        </header>
    )
}

export default Header;