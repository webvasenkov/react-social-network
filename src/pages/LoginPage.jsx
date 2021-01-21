import React from 'react'
import LoginForm from '../components/form/LoginForm'

function LoginPage({handlerLoginForm}) {
    return (
        <div className="login-page">
            <div className="container login-page__container">
                <div className="login-page__wrapper">
                    <LoginForm handlerLoginForm={handlerLoginForm}/>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;