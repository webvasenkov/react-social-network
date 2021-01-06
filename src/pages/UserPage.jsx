import React from 'react';
import User from '../components/user/User'
import Pagination from '../components/shared/Pagination'
import avatar2 from '../assets/img/shared/avatar-2.jpg'
import avatar3 from '../assets/img/shared/avatar-3.jpg'
import avatar4 from '../assets/img/shared/avatar-4.jpg'
import avatar5 from '../assets/img/shared/avatar-5.jpg'
import avatar6 from '../assets/img/shared/avatar-6.jpg'

function UserPage() {
    return (
        <div className="user-page">
            <div className="container user-page__container">
                <ul className="user-page__users">
                    <User avatar={avatar2} name="Kristen Sayaka" isLookingJob={false} lookingJob=""/>
                    <User avatar={avatar3} name="Marco Liviu" isLookingJob={false} lookingJob=""/>
                    <User avatar={avatar4} name="Chrissie Antal" isLookingJob={false} lookingJob=""/>
                    <User avatar={avatar5} name="Ethan Gherardo" isLookingJob={true} lookingJob="Python-dev"/>
                    <User avatar={avatar6} name="Tashi Suibne" isLookingJob={true} lookingJob="C Developer"/>
                    <User avatar={avatar2} name="Kristen Sayaka" isLookingJob={false} lookingJob=""/>
                    <User avatar={avatar3} name="Marco Liviu" isLookingJob={false} lookingJob=""/>
                    <User avatar={avatar4} name="Chrissie Antal" isLookingJob={false} lookingJob=""/>
                    <User avatar={avatar5} name="Ethan Gherardo" isLookingJob={true} lookingJob="Python-dev"/>
                    <User avatar={avatar6} name="Tashi Suibne" isLookingJob={true} lookingJob="C Developer"/>
                    <User avatar={avatar2} name="Kristen Sayaka" isLookingJob={false} lookingJob=""/>
                    <User avatar={avatar3} name="Marco Liviu" isLookingJob={false} lookingJob=""/>
                </ul>
                <Pagination/>
            </div>
        </div>
    )
}

export default UserPage;