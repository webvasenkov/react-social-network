import React from 'react'
import Messages from './Messages'
import Message from './Message'
import Form from './Form'

function Correspondence({messageData}) {
    return (
        <div className="messenger__correspondence">
            <Messages>
                {
                    messageData.map(message => {
                        let data = {...message, key: message.id}
                        return <Message {...data}/>
                    })
                }
            </Messages>
            <Form/>
        </div>
    )
}

export default Correspondence;