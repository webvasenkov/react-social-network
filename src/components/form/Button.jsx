import React from 'react'
import classNames from 'classnames'

function Button({className, icon, children}) {
    return (
        <button className={classNames('button', className)}>
            {icon}
            <span className="button__name">{children}</span>
        </button>
    )
}

export default Button;