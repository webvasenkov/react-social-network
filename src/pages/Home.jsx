import React from 'react'
import About from '../components/about/About'
import PostForm from '../components/post/PostForm'
import Posts from '../components/post/Posts'

function Home() {
    return (
        <section className="home">
                <div className="container home__container">
                    <About/>
                    <PostForm/>
                    <Posts/>
                </div>
        </section>
    )
}

export default Home;