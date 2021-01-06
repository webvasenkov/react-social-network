import React from 'react'
import Messages from './Messages'
import Message from './Message'
import Form from './Form'

function Correspondence() {
    return (
        <div className="messenger__correspondence">
            <Messages>
                <Message/>
                <Message sent={true}/>
                <Message/>
                <Message/>
                <Message sent={true}/>
                <Message/>
                <Message/>
                <Message sent={true}/>
                <Message sent={true}/>
                <Message sent={true}/>
                <Message/>
            </Messages>
            <Form/>
        </div>
    )
}

export default Correspondence;