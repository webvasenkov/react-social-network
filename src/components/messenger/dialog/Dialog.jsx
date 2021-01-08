import React from 'react'
import classNames from 'classnames'
import avatar from '../../../assets/img/shared/avatar-6.jpg'
import {currentDate} from '../../../utils/utils'
import Avatar from "../../user/Avatar";

function Dialog({selected}) {
    const date = currentDate()
    return (
        <li className={classNames("messenger__dialog", {'messenger__dialog_selected': selected})}>
            <div className="messenger__dialog-wrapper">
                <Avatar className=" messenger__dialog-avatar-img" avatar={avatar}/>
                <div className="messenger__dialog-info">
                    <h3 className="messenger__dialog-user-name">Marco Liviu</h3>
                    <p className="messenger__dialog-snippet-message">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <span className='messenger__dialog-date'>{date}</span>
                </div>
            </div>
        </li>
    )
}

export default Dialog;