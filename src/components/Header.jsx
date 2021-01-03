import React from 'react'
import logo from '../assets/img/logo.svg'
import home from '../assets/img/home.svg'
import message from '../assets/img/message.svg'
import users from '../assets/img/users.svg'
import news from '../assets/img/news.svg'
import music from '../assets/img/music.svg'
import settings from '../assets/img/settings.svg'
import avatar from '../assets/img/avatar/default.png'
import logout from '../assets/img/logout.svg'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="logo">
                        <img className="logo__icon" src={logo} alt="logo"/>
                    </div>
                    <div className="navigation header__navigation">
                        <ul className="navigation__items">
                            <li className="navigation__item navigation__item_active">
                                <a className="navigation__item-link" href="#home">
                                    <img className="navigation__item-ico" src={home} alt="home"/>
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__item-link" href="#message">
                                    <img className="navigation__item-ico" src={message} alt="message"/>
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__item-link" href="#users">
                                    <img className="navigation__item-ico" src={users} alt="users"/>
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__item-link" href="#news">
                                    <img className="navigation__item-ico" src={news} alt="news"/>
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__item-link" href="#music">
                                    <img className="navigation__item-ico" src={music} alt="music"/>
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__item-link" href="#settings">
                                    <img className="navigation__item-ico" src={settings} alt="settings"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header__logout">
                        <div className="user">
                            <div className="user__wrapper">
                                <div className="avatar user__avatar">
                                    <img className='avatar__img' src={avatar} alt="avatar"/>
                                </div>
                                <h3 className="user__name">Julia Harris</h3>
                            </div>
                        </div>

                        <button className="header__logout-btn">
                            <img className="header__logout-icon" src={logout} alt="logout"/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;