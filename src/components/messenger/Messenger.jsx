import React from 'react'
import Dialogs from './dialog/Dialogs'
import Correspondence from './correspondence/Correspondence'

function Messenger({dialogsData, messagesData, sendMessage}) {
    return (
        <div className="messenger">
            <div className="messenger__wrapper">
                <Dialogs dialogsData={dialogsData}/>
                <Correspondence
                    messagesData={messagesData}
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    )
}

export default Messenger