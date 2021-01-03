import React from 'react'
import 'normalize.css'
import './scss/app.scss';
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
      <>
      <Header/>
      <Home/>
      <Footer/>
      </>
  )
}

export default App;
