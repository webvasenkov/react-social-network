import React from 'react'
import classNames from 'classnames'

function ButtonIcon({className, icon, name}) {
    return (
        <button className={classNames('button', className)}>
            <span className="button__icon">{icon}</span>
            <span className="button__name">{name}</span>
        </button>
    )
}

export default ButtonIcon;