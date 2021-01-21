import React from 'react'
import Post from './Post'

function Posts({postsData, profileAuth}) {
    const posts = postsData.map(post => <Post key={post.id} {...post} profileAuth={profileAuth}/>)

    return (
        <ul className="posts profile-page__posts">
            {posts}
        </ul>
    )
}

export default Posts;