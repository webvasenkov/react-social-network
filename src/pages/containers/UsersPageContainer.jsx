import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import UsersPage from '../UsersPage'
import Preloader from '../../components/shared/Preloader';
import {
    setCurrentPage,
    getUsers,
    following,
    unfollowing,
} from '../../redux/reducers/usersPageReducer'
import {withAuthRedirect} from '../../components/hoc/withAuthRedirect';

class UserPageContainer extends React.Component {
    constructor(props) {
        super(props)

        this.handlerFollow = this.handlerFollow.bind(this)
        this.handlerUnfollow = this.handlerUnfollow.bind(this)
    }

    componentDidMount() {
        this.getUsers()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.getUsers()
        }
    }

    getUsers() {
        this.props.getUsers(this.props.currentPage, this.props.numberUsersOnePage)
    }

    handlerFollow(userId) {
        this.props.following(userId)
    }

    handlerUnfollow(userId) {
        this.props.unfollowing(userId)
    }

    render() {
        if (!this.props.isLoadingUsers) {
            return <Preloader/>
        }

        return <UsersPage {...this.props} handlerFollow={this.handlerFollow} handlerUnfollow={this.handlerUnfollow}/>
    }
}

function mapStateToProps({usersPage}) {
    const {usersData, numberUsersOnePage, currentPage, totalUsers, statusFollows, isLoadingUsers} = usersPage

    return {
        usersData,
        numberUsersOnePage,
        currentPage,
        totalUsers,
        statusFollows,
        isLoadingUsers
    }
}

const mapDispatchToProps = {
    setCurrentPage,
    getUsers,
    following,
    unfollowing,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UserPageContainer)