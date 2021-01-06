import React from 'react'
import Post from './Post'

function Posts() {
    return (
        <ul className="posts home-page__posts">
            <Post/>
            <Post/>
            <Post/>
        </ul>
    )
}

export default Posts;