import React from 'react'
import {NavLink} from "react-router-dom";
import home from "../../../assets/img/header/home.svg";
import message from "../../../assets/img/header/message.svg";
import users from "../../../assets/img/header/users.svg";
import news from "../../../assets/img/header/news.svg";
import music from "../../../assets/img/header/music.svg";
import settings from "../../../assets/img/header/settings.svg";

function Navigation() {
    return (
        <div className="navigation header__navigation">
            <ul className="navigation__items">
                <li className="navigation__item">
                    <NavLink className="navigation__item-link" activeClassName="navigation__item-link_active" to="home">
                        <img className="navigation__item-ico" src={home} alt="home"/>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__item-link" activeClassName="navigation__item-link_active" to="messages">
                        <img className="navigation__item-ico" src={message} alt="message"/>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__item-link" activeClassName="navigation__item-link_active" to="users">
                        <img className="navigation__item-ico" src={users} alt="users"/>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__item-link" activeClassName="navigation__item-link_active" to="news">
                        <img className="navigation__item-ico" src={news} alt="news"/>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__item-link" activeClassName="navigation__item-link_active" to="music">
                        <img className="navigation__item-ico" src={music} alt="music"/>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__item-link" activeClassName="navigation__item-link_active" to="settings">
                        <img className="navigation__item-ico" src={settings} alt="settings"/>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;