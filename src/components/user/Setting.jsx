import React from 'react'
import InputIcon from '../form/InputIcon'
import Button from '../form/Button'
import user from '../../assets/img/about/user.svg'
import brain from '../../assets/img/about/brain.svg'
import eye from '../../assets/img/about/eye.svg'
import instagram from '../../assets/img/social-networks/instagram.svg'
import facebook from '../../assets/img/social-networks/facebook.svg'
import twitter from '../../assets/img/social-networks/twitter.svg'

function Setting() {
    return (
        <React.Fragment>
            <div className="about__setting-bio">
                <InputIcon icon={user} placeholder="What is your name?"/>
                <InputIcon icon={brain} placeholder="What do you think about..."/>
                <InputIcon icon={eye} placeholder="What kind of job are you looking for?"/>
            </div>
            <div className="about__setting-links">
                <InputIcon className="about__setting-link" icon={instagram} placeholder="login"/>
                <InputIcon className="about__setting-link" icon={facebook} placeholder="login"/>
                <InputIcon className="about__setting-link" icon={twitter} placeholder="login"/>
                <Button className="about__save-button" icon={
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.76971 2.18133C4.45497 0.712303 6.97702 0.68984 8.68559 2.03084L7.33132 2.08025C7.1565 2.08699 7.02131 2.22626 7.0283 2.39472C7.03529 2.5587 7.17515 2.68673 7.34298 2.68673C7.34764 2.68673 7.34997 2.68673 7.35463 2.68673L9.43381 2.61261C9.60397 2.60587 9.73683 2.47334 9.73683 2.30937V2.2869C9.73683 2.28241 9.73683 2.28017 9.73683 2.27567V2.27343L9.65991 0.292259C9.65292 0.123792 9.50607 -0.00648862 9.33358 0.000250047C9.15876 0.00698872 9.02357 0.146255 9.03056 0.314721L9.07951 1.55688C8.23339 0.889754 7.19147 0.503404 6.07729 0.449495C4.69738 0.382108 3.37109 0.838091 2.34782 1.73209C0.939941 2.96077 0.343226 4.82963 0.790762 6.60864C0.825726 6.7479 0.953927 6.84 1.09611 6.84C1.12175 6.84 1.14506 6.83775 1.1707 6.83101C1.33853 6.79058 1.44342 6.62661 1.40146 6.46488C1.00987 4.90151 1.53199 3.25952 2.76971 2.18133Z"/>
                        <path d="M10.935 4.39157C10.8931 4.22984 10.7229 4.12876 10.5551 4.16919C10.3873 4.20963 10.2824 4.3736 10.3243 4.53533C10.7183 6.0987 10.1938 7.74069 8.95609 8.81887C8.08665 9.57585 6.99579 9.94872 5.90958 9.94872C4.87232 9.94872 3.83739 9.60954 3.00293 8.94017L4.3735 8.82112C4.54599 8.8054 4.67419 8.65939 4.65788 8.49092C4.64156 8.32246 4.49005 8.20116 4.31523 8.21689L2.24305 8.39658C2.07056 8.41231 1.94236 8.55831 1.95868 8.72678L2.14515 10.7237C2.15913 10.8809 2.29666 11 2.45749 11C2.46682 11 2.47614 11 2.48546 10.9977C2.65795 10.982 2.78615 10.836 2.76983 10.6675L2.65795 9.45231C3.50407 10.1127 4.54133 10.4968 5.64852 10.5507C5.73709 10.5552 5.82567 10.5574 5.91191 10.5574C7.19624 10.5574 8.41764 10.1037 9.37798 9.26812C10.7859 8.03943 11.3826 6.17282 10.935 4.39157Z"/>
                    </svg>
                }>Save</Button>
            </div>
        </React.Fragment>
    )
}

export default Setting;