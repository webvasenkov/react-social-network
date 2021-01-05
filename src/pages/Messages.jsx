import React from 'react'
import Messenger from '../components/messenger/Messenger'

function Messages() {
    return (
        <section className="messages">
            <div className="container messages__container">
                <Messenger/>
            </div>
        </section>
    )
}

export default Messages