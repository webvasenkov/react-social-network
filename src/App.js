import React from 'react'
import './scss/app.scss'
import {connect} from 'react-redux'
import {authMe, authLogout} from './redux/reducers/authReducer'
import {Route, Switch, Redirect} from 'react-router-dom'
import Footer from './components/shared/Footer'
import Header from './components/shared/header/Header'
import Preloader from './components/shared/Preloader'
import {LoginPageContainer, ProfilePageContainer, ConstructionPage, NotFoundPage} from './pages'

const UsersPageContainer = React.lazy(() => import('./pages/containers/UsersPageContainer'))
const MessagesPageContainer = React.lazy(() => import('./pages/containers/MessagesPageContainer'))

class App extends React.Component {
    componentDidMount() {
        this.props.authMe()
    }

    render() {
        if (!this.props.isLoading) {
            return <Preloader/>
        }

        return (
            <div className="app">
                <Header isAuth={this.props.isAuth} authLogout={this.props.authLogout}/>
                <React.Suspense fallback={Preloader}>
                    <Switch>
                        <Route exact path="/" component={ProfilePageContainer}/>
                        <Route path="/login" component={LoginPageContainer}/>
                        <Route path={["/profile", "/users/:id"]} component={ProfilePageContainer}/>
                        <Route path="/messages" component={MessagesPageContainer}/>
                        <Route exact path="/users" component={UsersPageContainer}/>
                        <Route path="/news" component={ConstructionPage}/>
                        <Route path="/music" component={ConstructionPage}/>
                        <Route path="/settings" component={ConstructionPage}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </React.Suspense>
                <Footer/>
            </div>
        )
    }
}

export default connect(({auth}) => ({isLoading: auth.isLoading, isAuth: auth.isAuth}), {authMe, authLogout})(App);
