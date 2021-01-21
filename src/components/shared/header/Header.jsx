import React from 'react'
import {connect} from 'react-redux'
import {authLogout} from '../../../redux/reducers/authReducer'
import Logo from '../Logo'
import Navigation from './Navigation'
import User from './User'

function Header({isAuth, authLogout}) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    {isAuth
                        ? <>
                            <Logo/>
                            <Navigation/>
                            <User authLogout={authLogout}/>
                        </>
                        : <Logo className={"header__logo_center"}/>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;