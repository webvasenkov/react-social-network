import React from 'react'
import Dialog from './Dialog'

function Dialogs({dialogData}) {
    return (
        <ul className="messenger__dialogs">
            {
                dialogData.map(dialog => {
                    let data = {...dialog, key: dialog.id}
                    return <Dialog {...data}/>
                })
            }
        </ul>
    )
}

export default Dialogs;