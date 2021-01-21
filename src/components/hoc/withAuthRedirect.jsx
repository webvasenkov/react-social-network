import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";

export function withAuthRedirect(Component) {
    class WrapperComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to="/login"/>
            }

            return <Component {...this.props}/>
        }
    }

    function mapStateToProps({auth}) {
        const {isAuth} = auth

        return {
            isAuth
        }
    }

    return connect(mapStateToProps, null)(WrapperComponent)
}