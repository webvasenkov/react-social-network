import React from 'react'
import Messenger from '../components/messenger/Messenger'

function MessagePage({messagePage}) {


    return (
        <div className="message-page">
            <div className="container message-page__container">
                <Messenger messagePage={messagePage}/>
            </div>
        </div>
    )
}

export default MessagePage