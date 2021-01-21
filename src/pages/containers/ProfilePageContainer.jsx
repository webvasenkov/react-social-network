import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router'
import {addPost, getProfile, putProfile, putProfileStatus} from '../../redux/reducers/profilePageReducer'
import ProfilePage from '../ProfilePage'
import Preloader from '../../components/shared/Preloader';
import {withAuthRedirect} from "../../components/hoc/withAuthRedirect";

class ProfilePageContainer extends React.Component {
    #userId = (this.props.match.params && this.props.match.params.id) || this.props.dataAuth.id

    componentDidMount() {
        this.props.getProfile(this.#userId)
    }

    componentDidUpdate(prevPros) {
        if (prevPros.match.path !== this.props.match.path) {
            this.props.getProfile(this.props.dataAuth.id)
        }
    }

    render() {
        if (!this.props.isLoading.profile || !this.props.isLoading.status) {
            return <Preloader/>
        }

        return <ProfilePage {...this.props}/>
    }
}

function mapStateToProps({profilePage, auth}) {
    const {postsData, profile, isProfileAuth, profileStatus, isLoading} = profilePage
    const {dataAuth, profileAuth} = auth
    return {
        postsData,
        profile,
        isProfileAuth,
        profileStatus,
        dataAuth,
        profileAuth,
        isLoading
    }
}

const mapDispatchToProps = {
    addPost,
    getProfile,
    putProfileStatus,
    putProfile
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(ProfilePageContainer);