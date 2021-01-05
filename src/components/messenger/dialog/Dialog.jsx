import React from 'react'
import classNames from 'classnames'
import avatar from '../../../assets/img/shared/default-2.jpg'
import {currentDate} from '../../../utils/utils'

function Dialog({className}) {
    const date = currentDate()
    return (
        <li className={classNames("dialog", className)}>
            <div className="dialog__wrapper">
                <div className="avatar dialog__avatar">
                    <img className="avatar__img" src={avatar} alt="avatar"/>
                </div>

                <div className="dialog__info">
                    <h3 className="dialog__user-name">Marco Liviu</h3>
                    <p className="dialog__snippet-message">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <span className='dialog__date'>{date}</span>
                </div>
            </div>
        </li>
    )
}

export default Dialog;