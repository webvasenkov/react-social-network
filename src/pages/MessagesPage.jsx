import React from 'react'
import Messenger from '../components/messenger/Messenger'

function MessagesPage({dialogsData, messagesData, sendMessage}) {
    return (
        <div className="messages-page">
            <div className="container messages-page__container">
                <Messenger
                    dialogsData={dialogsData}
                    messagesData={messagesData}
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    )
}

export default MessagesPage