import React from 'react'
import classNames from 'classnames'

function Button({className, icon, children}) {
    return (
        <button className={classNames('button', className)}>
            <span className="button__icon">{icon}</span>
            <span className="button__name">{children}</span>
        </button>
    )
}

export default Button;