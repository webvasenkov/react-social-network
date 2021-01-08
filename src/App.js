import React from 'react'
import 'normalize.css'
import './scss/app.scss';
import {Switch, Route} from 'react-router-dom'
import Footer from './components/shared/Footer'
import Header from './components/shared/header/Header'
import {LoginPage, HomePage, MessagePage, UserPage, ConstructionPage} from './pages'

function App() {
    return (
        <div className="app">
            <Header/>
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/messages" component={MessagePage}/>
                <Route path="/users" component={UserPage}/>
                <Route path="/news" component={ConstructionPage}/>
                <Route path="/music" component={ConstructionPage}/>
                <Route path="/settings" component={ConstructionPage}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
