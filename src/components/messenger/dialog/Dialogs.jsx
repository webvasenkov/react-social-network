import React from 'react'
import Dialog from './Dialog'

function Dialogs() {
    return (
        <ul className="messenger__dialogs">
            <Dialog/>
            <Dialog className="dialog__selected"/>
            <Dialog/>
            <Dialog/>
        </ul>
    )
}

export default Dialogs;