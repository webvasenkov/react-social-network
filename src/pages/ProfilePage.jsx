import React from 'react'
import PostForm from '../components/form/PostForm'
import Posts from '../components/post/Posts'
import AboutUser from "../components/user/AboutUser";

function ProfilePage({
                         postsData,
                         addPost,
                         profile,
                         profileStatus,
                         putProfile,
                         putProfileStatus,
                         isUpdatedAbout,
                         isProfileAuth,
                         profileAuth,
                     }) {
    const posts = isProfileAuth && <Posts postsData={postsData} profileAuth={profileAuth}/>

    return (
        <div className="profile-page">
            <div className="container profile-page__container">
                <AboutUser
                    {...profile}
                    profileStatus={profileStatus}
                    putProfileStatus={putProfileStatus}
                    putProfile={putProfile}
                    isUpdatedAbout={isUpdatedAbout}
                    isProfileAuth={isProfileAuth}
                />
                <PostForm
                    addPost={addPost}
                />
                {posts}
            </div>
        </div>
    )
}

export default ProfilePage;