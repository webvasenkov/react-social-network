import React from 'react';
import classNames from 'classnames'
import {Link} from 'react-router-dom';
import {Logo as LogoIcon} from '../icons';

function Logo({className}) {
    return (
        <Link className={classNames("logo", className)} to="/profile">
            <LogoIcon className="icon-default"/>
        </Link>
    )
}

export default Logo;