import React from 'react'
import classNames from 'classnames'
import Avatar from "../../user/Avatar";

function Dialog({avatar, userName, snippetMessage, date, isSelected}) {
    return (
        <li className={classNames("messenger__dialog", {'messenger__dialog_selected': isSelected})}>
            <div className="messenger__dialog-wrapper">
                <Avatar avatar={avatar} margin10/>
                <div className="messenger__dialog-info">
                    <h3 className="messenger__dialog-user-name">{userName}</h3>
                    <p className="messenger__dialog-snippet-message">
                        {snippetMessage}
                    </p>
                    <span className='messenger__dialog-date'>{date}</span>
                </div>
            </div>
        </li>
    )
}

export default Dialog;