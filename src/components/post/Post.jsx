import React from 'react'
import avatar from "../../assets/img/shared/avatar-1.png";
import {currentDate} from '../../utils/utils'

function Post() {
    const date = currentDate()
    return (
        <li className='post home-page__post'>
            <div className="post__wrapper">
                <div className="user post__user">
                    <div className="user__wrapper">
                        <div className="avatar user__avatar">
                            <img className='avatar__img' src={avatar} alt="avatar"/>
                        </div>
                        <h3 className="user__name">Julia Harris</h3>
                    </div>
                </div>
                <p className="post__text">
                    Vestibulum consequat sapien vitae turpis elementum, id hendrerit ligula laoreet. Sed
                    condimentum at metus consequat vestibulum. Nunc ac est eget purus ultrices pellentesque et a
                    arcu. Donec eros orci, ullamcorper ut nulla id, elementum faucibus neque. Quisque faucibus
                    posuere mauris vel tempus. Suspendisse eget laoreet magna, non elementum dolor. Vivamus
                    porta aliquam ligula ut pellentesque. Integer vitae ipsum lorem. Sed aliquam pellentesque
                    sollicitudin. Vivamus iaculis ornare orci, quis feugiat dui mattis id. Curabitur sed nisl
                    ligula. Donec ante elit, commodo non est vel, gravida tempor orci. Nullam eleifend commodo
                    condimentum. In ac venenatis dolor. Nunc consectetur bibendum justo, eu scelerisque felis
                    semper at.
                </p>
                <span className="post__date">{date}</span>
            </div>
        </li>
    )
}

export default Post;