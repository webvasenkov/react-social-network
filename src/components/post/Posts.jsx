import React from 'react'
import Post from './Post'

function Posts() {
    return (
        <div className='posts'>
            <ul className="posts__items">
                <Post className='posts__item'/>
                <Post className='posts__item'/>
                <Post className='posts__item'/>
            </ul>
        </div>
    )
}

export default Posts;