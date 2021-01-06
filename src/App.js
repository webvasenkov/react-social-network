import React from 'react'
import 'normalize.css'
import './scss/app.scss';
import {Route} from 'react-router-dom'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import {HomePage, MessagePage, UserPage} from './pages'

function App() {
    return (
        <div className="app">
            <Header/>
            <Route path="/home">
                <HomePage/>
            </Route>
            <Route path="/messages">
                <MessagePage/>
            </Route>
            <Route path="/users">
                <UserPage/>
            </Route>
            <Footer/>
        </div>
    )
}

export default App;
