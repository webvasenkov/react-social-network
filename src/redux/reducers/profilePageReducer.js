import {store} from '../reduxStore'
import defaultAvatar from '../../assets/img/defaultAvatar.png'
import {API} from '../../api/API'
import {getFakePost} from './helper'
import {setProfileAuth} from './authReducer'

const ADD_POST = 'PROFILE/ADD_POST'
const SET_PROFILE = 'PROFILE/SET_PROFILE'
const SET_PROFILE_STATUS = 'PROFILE/SET_PROFILE_STATUS'
const SET_IS_LOADING = 'PROFILE/SET_IS_LOADING'
const SET_IS_PROFILE_AUTH = 'PROFILE/SET_IS_PROFILE_AUTH'

const initialState = {
    postsData: [
        {
            id: '1',
            user: {avatar: defaultAvatar, name: 'Julia Harris'},
            text: 'Vestibulum consequat sapien vitae turpis elementum, id hendrerit ligula laoreet.Sed condimentum at metus consequat vestibulum. Nunc ac est eget purus ultrices pellentesque et a arcu. Donec eros orci, ullamcorper ut nulla id, elementum faucibus neque. Quisque faucibus posuere mauris vel tempus. Suspendisse eget laoreet magna, non elementum dolor. Vivamus porta aliquam ligula ut pellentesque. Integer vitae ipsum lorem. Sed aliquam pellentesque sollicitudin. Vivamus iaculis ornare orci, quis feugiat dui mattis id. Curabitur sed nisl ligula. Donec ante elit, commodo non est vel, gravida tempor orci. Nullam eleifend commodo condimentum. In ac venenatis dolor. Nunc consectetur bibendum justo, eu scelerisque felis semper at.',
            date: '01/06/2021'
        },
        {
            id: '2',
            user: {avatar: defaultAvatar, name: 'Julia Harris'},
            text: 'Vestibulum consequat sapien vitae turpis elementum, id hendrerit ligula laoreet. Sed condimentum at metus consequat vestibulum. Nunc ac est eget purus ultrices pellentesque et a arcu. Donec eros orci, ullamcorper ut nulla id, elementum faucibus neque. Quisque faucibus posuere mauris vel tempus. Suspendisse eget laoreet magna, non elementum dolor. Vivamus porta aliquam ligula ut pellentesque. Integer vitae ipsum lorem. Sed aliquam pellentesque sollicitudin.',
            date: '01/03/2021'
        },
        {
            id: '3',
            user: {avatar: defaultAvatar, name: 'Julia Harris'},
            text: 'Sed condimentum at metus consequat vestibulum. Nunc ac est eget purus ultrices pellentesque et a arcu. Donec eros orci, ullamcorper ut nulla id, elementum faucibus neque. Quisque faucibus posuere mauris vel tempus. Suspendisse eget laoreet magna, non elementum dolor. Integer vitae ipsum lorem. Sed aliquam pellentesque sollicitudin. Donec ante elit, commodo non est vel, gravida tempor orci. Nullam eleifend commodo condimentum. In ac venenatis dolor. Nunc consectetur bibendum justo, eu scelerisque felis semper at.',
            date: '01/05/2021'
        }
    ],
    profile: null,
    isProfileAuth: false,
    profileStatus: '',
    isLoading: {
        profile: false,
        status: false
    },
}

function profilePageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return getFakePost(state, action.text)
        case SET_PROFILE:
            return {...state, profile: {...state.profile, ...action.profile}}
        case SET_IS_PROFILE_AUTH:
            return {...state, isProfileAuth: action.isProfileAuth}
        case SET_PROFILE_STATUS:
            return {...state, profileStatus: action.status}
        case SET_IS_LOADING:
            return {...state, isLoading: {...state.isLoading, profile: action.profile, status: action.status}}
        default:
            return state
    }
}

// === ActionCreators ===
export function addPost(text) {
    return {
        type: ADD_POST,
        text
    }
}

function setProfile(profile, isProfileAuth) {
    return {
        type: SET_PROFILE,
        profile,
        isProfileAuth
    }
}

function setProfileStatus(status) {
    return {
        type: SET_PROFILE_STATUS,
        status
    }
}

function setIsLoading(profile, status) {
    return {
        type: SET_IS_LOADING,
        profile,
        status
    }
}

function setIsProfileAuth(isProfileAuth) {
    return {
        type: SET_IS_PROFILE_AUTH,
        isProfileAuth
    }
}


// === thunkCreators ===
export function getProfile(userId) {
    return async function (dispatch) {
        const userAuthId = store.getState().auth.dataAuth.id
        dispatch(setIsLoading(false, false))
        const data = await API.profile.getProfile(userId)
        dispatch(setProfile(data))
        dispatch(setIsProfileAuth(false))
        if (data.userId === userAuthId) {
            dispatch(setProfileAuth(data))
            dispatch(setIsProfileAuth(true))
        }
        dispatch(getProfileStatus(userId))
        dispatch(setIsLoading(true, false))
    }
}

function getProfileStatus(userId) {
    return async function (dispatch) {
        dispatch(setIsLoading(true, false))
        const status = await API.profile.getProfileStatus(userId)
        dispatch(setProfileStatus(status))
        dispatch(setIsLoading(true, true))
    }
}

export function putProfileStatus(status) {
    return async function (dispatch) {
        const {resultCode} = await API.profile.putProfileStatus(status)
        if (!resultCode) {
            dispatch(setProfileStatus(status))
        }
    }
}

export function putProfile(profile) {
    return async function (dispatch) {
        const {resultCode} = await API.profile.putProfile(profile)
        if (!resultCode) {
            dispatch(setProfile(profile))
        }
    }
}

export default profilePageReducer;