import React from 'react'
import Messenger from '../components/messenger/Messenger'

function MessagePage() {
    return (
        <div className="message-page">
            <div className="container message-page__container">
                <Messenger/>
            </div>
        </div>
    )
}

export default MessagePage