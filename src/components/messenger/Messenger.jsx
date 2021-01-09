import React from 'react'
import Dialogs from './dialog/Dialogs'
import Correspondence from './correspondence/Correspondence'

function Messenger({messagePage}) {
    return (
        <div className="messenger">
            <div className="messenger__wrapper">
                <Dialogs dialogData={messagePage.dialogData}/>
                <Correspondence messageData={messagePage.messageData}/>
            </div>
        </div>
    )
}

export default Messenger