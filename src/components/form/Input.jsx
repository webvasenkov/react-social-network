import React from 'react'
import classNames from 'classnames'

function Input({className, placeholder, type}) {
    return (
        <input className={classNames('input', className)}  placeholder={placeholder} type={type}/>
    )
}

export default Input;