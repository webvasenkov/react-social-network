import defaultAvatar from '../../assets/img/defaultAvatar.png';
import {API} from '../../api/API';
import {setStatusFollows} from './usersPageReducer';
import {authMe} from "./authReducer";

function getId(state, key) {
    return (state[key].length + 1).toString()
}

export function getFakePost(state, text) {
    const id = getId(state, 'postsData')
    const newPost = {
        id,
        user: {avatar: defaultAvatar, name: 'Julia Harris'},
        text,
        date: '01/05/2021'
    }

    return {...state, currentText: '', postsData: [newPost, ...state.postsData]}
}

export function getFakeMessage(state, text) {
    const id = getId(state, 'messagesData')
    const newMessage = {
        id,
        text,
        time: '4:42',
        isSent: true
    }

    return {...state, currentText: '', messagesData: [...state.messagesData, newMessage]}
}

export function followUnfollow(isFollowed, state, action) {
    return {
        ...state, usersData: state.usersData.map(user => {
            if (user.id === action.userId) {
                user.followed = isFollowed
            }

            return user
        })
    }
}

export function followingUnfollowing(userId, apiKey, actionCreator) {
    return async function(dispatch) {
        dispatch(setStatusFollows(true, userId))
        const {resultCode} = await API.follow[apiKey](userId)
        if (!resultCode) {
            dispatch(actionCreator(userId))
            dispatch(setStatusFollows(false, userId))
        }
    }
}

export function authLoginLogout(apiKey, data) {
    return async function(dispatch) {
        const {resultCode} = await API.auth[apiKey](data)
        if (!resultCode) {
            dispatch(authMe())
        }
    }
}

