import React from 'react'
import Dialog from './Dialog'

function Dialogs({dialogsData}) {
    const dialogs = dialogsData.map(dialog => <Dialog key={dialog.id} {...dialog}/>)

    return (
        <ul className="messenger__dialogs">
            {dialogs}
        </ul>
    )
}

export default Dialogs;