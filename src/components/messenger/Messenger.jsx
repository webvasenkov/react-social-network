import React from 'react'
import Dialogs from './dialog/Dialogs'
import Correspondence from './correspondence/Correspondence'

function Messenger() {
    return (
        <div className="messenger">
            <div className="messenger__wrapper">
                <Dialogs/>
                <Correspondence/>
            </div>
        </div>
    )
}

export default Messenger