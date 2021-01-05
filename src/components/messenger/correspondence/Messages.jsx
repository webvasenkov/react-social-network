import React from 'react'

function Messages({children}) {
    return (
        <ul className="messages">
            {children}
        </ul>
    )
}

export default Messages;