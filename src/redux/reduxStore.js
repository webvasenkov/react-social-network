import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import profilePageReducer from './reducers/profilePageReducer'
import messagesPageReducer from './reducers/messagesPageReducer'
import usersPageReducer from './reducers/usersPageReducer'
import authReducer from './reducers/authReducer'


const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))