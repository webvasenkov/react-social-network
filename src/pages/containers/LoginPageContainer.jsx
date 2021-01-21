import React from 'react'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import LoginPage from '../LoginPage'
import {authLogin} from "../../redux/reducers/authReducer";

class LoginPageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handlerLoginForm = this.handlerLoginForm.bind(this)
    }

    handlerLoginForm(data) {
        this.props.authLogin(data)
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to="/profile"/>
        }

        return <LoginPage {...this.props} handlerLoginForm={this.handlerLoginForm}/>
    }
}

function mapStateToProps({auth}) {
    const {isAuth} = auth
    return {
        isAuth
    }
}

const mapDispatchToProps = {
    authLogin
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer)
