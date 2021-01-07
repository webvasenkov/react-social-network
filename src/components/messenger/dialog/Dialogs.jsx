import React from 'react'
import Dialog from './Dialog'

function Dialogs() {
    return (
        <ul className="messenger__dialogs">
            <Dialog/>
            <Dialog selected={true}/>
            <Dialog/>
            <Dialog/>
            <Dialog/>
            <Dialog/>
            <Dialog/>
        </ul>
    )
}

export default Dialogs;