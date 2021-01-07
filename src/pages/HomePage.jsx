import React from 'react'
import About from '../components/about/About'
import PostForm from '../components/post/PostForm'
import Posts from '../components/post/Posts'

function HomePage() {
    return (
        <div className="home-page">
            <div className="container home-page__container">
                <About isSettings={false}/>
                <PostForm/>
                <Posts/>
            </div>
        </div>
    )
}

export default HomePage;