import React from 'react'
import Avatar from '../user/Avatar';

function Post({ text, date, profileAuth}) {
    return (
        <li className='post profile-page__post'>
            <div className="post__wrapper">
                <div className="user post__user">
                    <div className="user__wrapper">
                        <Avatar className="user__avatar-img" avatar={profileAuth.photos.small} margin15/>
                        <h3 className="user__name">{profileAuth.fullName}</h3>
                    </div>
                </div>
                <p className="post__text">
                    {text}
                </p>
                <span className="post__date">{date}</span>
            </div>
        </li>
    )
}

export default Post;