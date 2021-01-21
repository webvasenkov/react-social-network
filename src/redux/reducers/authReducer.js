import {API} from '../../api/API';
import {authLoginLogout} from './helper';

const SET_AUTH_ME = 'AUTH/SET_AUTH_ME'
const SET_PROFILE_AUTH = 'AUTH/SET_PROFILE_AUTH'
const SET_IS_LOADING = 'AUTH/SET_IS_LOADING'

const initialState = {
    dataAuth: null,
    profileAuth: null,
    isLoading: false,
    isAuth: false,
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_LOADING:
            return {...state, isLoading: action.isLoading}
        case SET_AUTH_ME:
            return {...state, dataAuth: {...state.dataAuth, ...action.dataAuth}, isAuth: action.isAuth}
        case SET_PROFILE_AUTH: {
            return {...state, profileAuth: action.profileAuth}
        }
        default:
            return state
    }
}

// ==== actionCreators ===
function setIsLoading(isLoading) {
    return {
        type: SET_IS_LOADING,
        isLoading
    }
}

export function setAuthMe(dataAuth, isAuth) {
    return {
        type: SET_AUTH_ME,
        dataAuth,
        isAuth,
    }
}

export function setProfileAuth(profileAuth) {
    return {
        type: SET_PROFILE_AUTH,
        profileAuth
    }
}

// === thunkCreators ===
export function authMe() {
    return async function (dispatch) {
        dispatch(setIsLoading(false))
        const {data, resultCode} = await API.auth.getAuthMe()
        if (!resultCode) {
            dispatch(setAuthMe(data, true))
        } else {
            dispatch(setAuthMe(null, false))
        }
        dispatch(setIsLoading(true))
    }
}

export function authLogin(data) {
    return authLoginLogout('postAuthLogin', data)
}

export function authLogout() {
    return authLoginLogout('deleteAuthLogin')
}

export default authReducer;