import React from 'react'
import About from '../components/About'
import PostForm from '../components/Post/PostForm'
import Posts from '../components/Post/Posts'

function Home() {
    return (
        <section className="home">
            <div className="container">
                <div className="home__wrapper">
                    <About/>
                    <PostForm/>
                    <Posts/>
                </div>
            </div>
        </section>
    )
}

export default Home;