import React from 'react'
import 'normalize.css'
import './scss/app.scss'
import {Switch, Route} from 'react-router-dom'
import Footer from './components/shared/Footer'
import Header from './components/shared/header/Header'
import {LoginPage, HomePage, ConstructionPage} from './pages'
const UserPage = React.lazy(() => import('./pages/UserPage'))
const MessagePage = React.lazy(() => import('./pages/MessagePage'))

function App({store}) {
    return (
        <div className="app">
            <Header/>
            <Switch>
                <React.Suspense fallback="loading...">
                    <Route exact path="/" component={() => <LoginPage/>}/>
                    <Route path="/login" component={() => <LoginPage/>}/>
                    <Route path="/home" component={() => <HomePage/>}/>
                    <Route path="/messages" component={() => <MessagePage messagePage={store.messagePage}/>}/>
                    <Route path="/users" component={() => <UserPage/>}/>
                    <Route path="/news" component={() => <ConstructionPage/>}/>
                    <Route path="/music" component={() => <ConstructionPage/>}/>
                    <Route path="/settings" component={() => <ConstructionPage/>}/>
                </React.Suspense>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
