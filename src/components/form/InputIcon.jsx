import React from 'react'
import classNames from 'classnames'

function InputIcon({className, icon, placeholder}) {
    return (
        <div className={classNames("input-icon", className)}>
            <div className="input-icon__wrapper">
                <img className="input-icon__icon" src={icon} alt="icon"/>
                <input className="input-icon__input" placeholder={placeholder} type="text"/>
            </div>
        </div>
    )
}

export default InputIcon;