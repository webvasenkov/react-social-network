import React from 'react'
import classNames from 'classnames'

function Message({sent}) {
    return (
        <li className={classNames("messenger__message", {"messenger__message_sent": sent})}>
            <p className="messenger__message-text">
                Lorem ipsum dolor sit amet, consec adipisicing elit.
            </p>
            <span className="messenger__message-time">4:42 PM</span>
        </li>
    )
}

export default Message;