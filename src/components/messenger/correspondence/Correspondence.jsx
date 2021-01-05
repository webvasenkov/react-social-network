import React from 'react'
import Messages from './Messages'
import Message from './Message'
import Form from './Form'

function Correspondence() {
    return (
        <div className="messenger__correspondence">
            <Messages>
                <Message/>
                <Message/>
                <Message/>
            </Messages>
            <Form/>
        </div>
    )
}

export default Correspondence;