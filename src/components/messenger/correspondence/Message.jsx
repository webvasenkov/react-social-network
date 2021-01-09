import React from 'react'
import classNames from 'classnames'

function Message({text, time, isSent}) {
    return (
        <li className={classNames("messenger__message", {"messenger__message_sent": isSent})}>
            <p className="messenger__message-text">
                {text}
            </p>
            <span className="messenger__message-time">{time}</span>
        </li>
    )
}

export default Message;