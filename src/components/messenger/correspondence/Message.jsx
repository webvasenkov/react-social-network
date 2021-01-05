import React from 'react'
import classNames from 'classnames'

function Message({className}) {
    return (
        <li className={classNames("message", className)}>
            <p className="message__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <span className="message__time">4:42 PM</span>
        </li>
    )
}

export default Message;