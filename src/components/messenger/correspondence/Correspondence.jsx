import React from 'react'
import Messages from './Messages'
import Message from './Message'
import MessengerForm from '../../form/MessengerForm'

function Correspondence({messagesData, sendMessage}) {
    const messages = messagesData.map(message => <Message key={message.id} {...message}/>)

    return (
        <div className="messenger__correspondence">
            <Messages>
                {messages}
            </Messages>
            <MessengerForm sendMessage={sendMessage}/>
        </div>
    )
}

export default Correspondence;