import React from 'react'
import classNames from 'classnames'

function InputIcon({className, icon, placeholder, name, register}) {
    return (
        <div className={classNames("input-icon", className)}>
            <div className="input-icon__wrapper">
                <span className="input-icon__icon">{icon}</span>
                <input className="input-icon__input" placeholder={placeholder} name={name} ref={register}/>
            </div>
        </div>
    )
}

export default InputIcon;