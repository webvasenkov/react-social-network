import React from 'react'
import {Construction} from '../components/icons'
import {withAuthRedirect} from '../components/hoc/withAuthRedirect';

function ConstructionPage() {
    return (
        <div className="construction-page">
            <div className="container construction-page__container">
                <div className="construction-page__wrapper">
                    <Construction className="construction-page__icon"/>
                    <h2 className="construction-page__title">This page is <br/> under construction</h2>
                </div>
            </div>
        </div>
    )
}

export default withAuthRedirect(ConstructionPage);