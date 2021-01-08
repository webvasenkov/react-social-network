import React from 'react'
import Input from '../components/form/Input'
import Button from '../components/form/Button'

function LoginPage() {
    return (
        <div className="login-page">
            <div className="container login-page__container">
                <div className="login-page__wrapper">
                    <form className="login-page__form">
                        <label className="login-page__title">LogIn</label>
                        <Input className="login-page__input" placeholder="Login"/>
                        <Input className="login-page__input" placeholder="Password" type="password"/>
                        <Button className="login-page__login-button" icon={
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="#fff"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path
                                        d="M10.6087 8.52173H0.521739C0.233738 8.52173 0 8.28799 0 7.99999C0 7.71199 0.233738 7.47826 0.521739 7.47826H10.6087C10.8967 7.47826 11.1304 7.71199 11.1304 7.99999C11.1304 8.28799 10.8967 8.52173 10.6087 8.52173Z"/>
                                    <path
                                        d="M7.82609 11.3043C7.69247 11.3043 7.55897 11.2536 7.45733 11.1513C7.25352 10.9475 7.25352 10.6171 7.45733 10.4132L9.87126 7.99936L7.45733 5.58542C7.25352 5.38162 7.25352 5.05107 7.45733 4.84727C7.66126 4.64346 7.99168 4.64346 8.19548 4.84727L10.978 7.62996C11.1819 7.83376 11.1819 8.16418 10.978 8.36799L8.19548 11.1506C8.0932 11.2536 7.95971 11.3043 7.82609 11.3043Z"/>
                                    <path
                                        d="M8.34783 15.6522C5.18186 15.6522 2.38681 13.7475 1.22576 10.7993C1.12004 10.5322 1.25213 10.2289 1.52 10.1231C1.78711 10.0188 2.09116 10.1489 2.19689 10.4181C3.19935 12.9635 5.61392 14.6087 8.34783 14.6087C11.9916 14.6087 14.9566 11.6438 14.9566 8.00001C14.9566 4.35624 11.9916 1.39127 8.34783 1.39127C5.61392 1.39127 3.19935 3.03648 2.19689 5.58187C2.0904 5.85115 1.78711 5.9812 1.52 5.87688C1.25213 5.77115 1.12004 5.46787 1.22576 5.20076C2.38681 2.25247 5.18186 0.347794 8.34783 0.347794C12.567 0.347794 16.0001 3.78088 16.0001 8.00001C16.0001 12.2191 12.567 15.6522 8.34783 15.6522Z"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="16" height="16"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        }>Login</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;