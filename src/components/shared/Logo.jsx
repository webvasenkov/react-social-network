import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "../../assets/img/header/logo.svg";

function Logo() {
    return (
        <NavLink className="logo" to="/home">
            <img className="logo__icon" src={logo} alt="logo"/>
        </NavLink>
    )
}

export default Logo;