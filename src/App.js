import React from 'react'
import 'normalize.css'
import './scss/app.scss';
import {Route} from 'react-router-dom'
import Header from './components/shared/Header'
import Home from './pages/Home'
import Messages from './pages/Messages'
import Footer from './components/shared/Footer'

function App() {
    return (
        <div className="app">
            <Header/>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/messages">
                <Messages/>
            </Route>
            <Footer/>
        </div>
    )
}

export default App;
