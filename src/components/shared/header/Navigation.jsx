import React from 'react'
import {NavLink} from 'react-router-dom';
import {Home, Message, Users, News, Music, Settings} from '../../icons'

function Navigation() {
    return (
        <div className="navigation header__navigation">
            <ul className="navigation__items">
                <li className="navigation__item">
                    <NavLink className="navigation__item-link" activeClassName="navigation__item-link_active"
                             to="/profile">
                        <Home className="icon-default"/>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__item-link" activeClassName="navigation__item-link_active"
                             to="/messages">
                        <Message className="icon-default"/>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__item-link" activeClassName="navigation__item-link_active"
                             to="/users">
                        <Users className="icon-default"/>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__item-link" activeClassName="navigation__item-link_active"
                             to="/news">
                        <News className="icon-default"/>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__item-link" activeClassName="navigation__item-link_active"
                             to="/music">
                        <Music className="icon-default"/>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__item-link" activeClassName="navigation__item-link_active"
                             to="/settings">
                        <Settings className="icon-default"/>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;