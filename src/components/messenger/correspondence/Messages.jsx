import React from 'react'

function Messages({children}) {
    return (
        <ul className="messenger__messages">
            {children}
        </ul>
    )
}

export default Messages;