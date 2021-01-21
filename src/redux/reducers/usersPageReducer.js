import {API} from '../../api/API'
import {followUnfollow, followingUnfollowing} from './helper'

const FOLLOW = 'USERS/FOLLOW'
const UNFOLLOW = 'USERS/UNFOLLOW'
const SET_USERS_DATA = 'USERS/SET_USERS_DATA'
const SET_TOTAL_USERS = 'USERS/SET_TOTAL_USERS'
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE'
const SET_STATUS_FOLLOWS = 'USERS/SET_STATUS_FOLLOWS'
const SET_IS_LOADING_USERS = 'USERS/SET_IS_LOADING_USERS'

const initialState = {
    usersData: [],
    numberUsersOnePage: 24,
    currentPage: 1,
    totalUsers: 0,
    statusFollows: [],
    isLoadingUsers: false,
}

function usersPageReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return followUnfollow(true, state, action)
        case UNFOLLOW:
            return followUnfollow(false, state, action)
        case SET_USERS_DATA:
            return {...state, usersData: action.usersData}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS:
            return {...state, totalUsers: action.totalUsers}
        case SET_STATUS_FOLLOWS:
            return {
                ...state, statusFollows: action.status
                    ? [...state.statusFollows, action.userId]
                    : state.statusFollows.filter(userId => userId !== action.userId)
            }
        case SET_IS_LOADING_USERS:
            return {...state, isLoadingUsers: action.isLoadingUsers}
        default:
            return state
    }
}

// === actionCreators ===
function follow(userId) {
    return {
        type: FOLLOW,
        userId
    }
}

function unfollow(userId) {
    return {
        type: UNFOLLOW,
        userId
    }
}

function setUsersData(usersData) {
    return {
        type: SET_USERS_DATA,
        usersData
    }
}

export function setCurrentPage(currentPage) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

function setTotalUsers(totalUsers) {
    return {
        type: SET_TOTAL_USERS,
        totalUsers
    }
}

export function setStatusFollows(status, userId) {
    return {
        type: SET_STATUS_FOLLOWS,
        status,
        userId,
    }
}

function setIsLoadingUsers(isLoadingUsers) {
    return {
        type: SET_IS_LOADING_USERS,
        isLoadingUsers
    }
}

// === thunkCreators ===
export function getUsers(currentPage, numberUsersOnePage) {
    return async function (dispatch) {
        dispatch(setIsLoadingUsers(false))
        const {items, totalCount} = await API.users.getUsers(currentPage, numberUsersOnePage)
        dispatch(setUsersData(items))
        dispatch(setTotalUsers(totalCount))
        dispatch(setIsLoadingUsers(true))
    }
}

export function following(userId) {
    return followingUnfollowing(userId, 'postFollow', follow)
}

export function unfollowing(userId) {
    return followingUnfollowing(userId, 'deleteFollow', unfollow)
}

export default usersPageReducer;