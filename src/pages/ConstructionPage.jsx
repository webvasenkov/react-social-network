import React from 'react'
import construction from '../assets/img/shared/construction.svg'

function ConstructionPage() {
    return (
        <div className="construction-page">
            <div className="container construction-page__container">
                <div className="construction-page__wrapper">
                    <img className="construction-page__icon" src={construction} alt="construction"/>
                    <h2 className="construction-page__title">This page is <br/> under construction</h2>
                </div>
            </div>
        </div>
    )
}

export default ConstructionPage;