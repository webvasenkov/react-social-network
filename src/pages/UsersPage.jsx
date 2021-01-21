import React from 'react';
import User from '../components/user/User'
import Pagination from '../components/shared/Pagination'

function UsersPage({
                       usersData,
                       totalUsers,
                       numberUsersOnePage,
                       setCurrentPage,
                       currentPage,
                       handlerFollow,
                       handlerUnfollow,
                       statusFollows
                   }) {
    const users = usersData.map(user =>
        <User
            {...user}
            key={user.id}
            handlerFollow={handlerFollow}
            handlerUnfollow={handlerUnfollow}
            statusFollows={statusFollows}
        />)

    return (
        <div className="users-page">
            <div className="container users-page__container">
                <ul className="users-page__users">
                    {users}
                </ul>
                <Pagination
                    className="users-page__pagination"
                    totalUsers={totalUsers}
                    numberUsersOnePage={numberUsersOnePage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
        </div>
    )
}

export default UsersPage;