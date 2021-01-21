import defaultAvatar from '../assets/img/defaultAvatar.png';
import profilePageReducer from './reducers/profilePageReducer'
import messagesPageReducer from './reducers/messagesPageReducer'

export const store = {
    _state: {
        homePage: {
            currentText: '',
            postData: [
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
            ]
        },
        messagePage: {
            currentText: '',
            dialogData: [
                {
                    id: '1',
                    avatar: defaultAvatar,
                    userName: 'Marco Liviu',
                    snippetMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    date: '01/09/2021',
                    isSelected: false
                },
                {
                    id: '2',
                    avatar: defaultAvatar,
                    userName: 'Kristen Sayaka',
                    snippetMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    date: '01/05/2021',
                    isSelected: false
                },
                {
                    id: '3',
                    avatar: defaultAvatar,
                    userName: 'Chrissie Antal',
                    snippetMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    date: '01/07/2021',
                    isSelected: false
                },
                {
                    id: '4',
                    avatar: defaultAvatar,
                    userName: 'Ethan Gherardo',
                    snippetMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    date: '01/03/2021',
                    isSelected: false
                },
                {
                    id: '5',
                    avatar: defaultAvatar,
                    userName: 'Tashi Suibne',
                    snippetMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    date: '01/01/2021',
                    isSelected: false
                },

            ],
            messageData: [
                {
                    id: '1',
                    text: 'Lorem ipsum dolor sit amet, consec adipisicing elit.',
                    time: '4:42',
                    isSent: false
                },
                {
                    id: '2',
                    text: 'Lorem ipsum dolor sit amet, consec adipisicing elit.',
                    time: '4:42',
                    isSent: false
                },
                {
                    id: '3',
                    text: 'Lorem ipsum dolor sit amet, consec adipisicing elit.',
                    time: '4:42',
                    isSent: false
                },
                {
                    id: '4',
                    text: 'Lorem ipsum dolor sit amet, consec adipisicing elit.',
                    time: '4:42',
                    isSent: true
                },
                {
                    id: '5',
                    text: 'Lorem ipsum dolor sit amet, consec adipisicing elit.',
                    time: '4:42',
                    isSent: false
                },
            ]
        },
        userPage: {
            userData: [
                {
                    id: '1',
                    avatar: defaultAvatar,
                    name: 'Kristen Sayaka',
                    lookingJob: '',
                    isLookingJob: false
                },
                {
                    id: '2',
                    avatar: defaultAvatar,
                    name: 'Marco Liviu',
                    lookingJob: '',
                    isLookingJob: false
                },
                {
                    id: '3',
                    avatar: defaultAvatar,
                    name: 'Chrissie Antal',
                    lookingJob: '',
                    isLookingJob: false
                },
                {
                    id: '4',
                    avatar: defaultAvatar,
                    name: 'Ethan Gherardo',
                    lookingJob: 'Python-dev',
                    isLookingJob: true
                },
                {
                    id: '5',
                    avatar: defaultAvatar,
                    name: 'Chrissie Antal',
                    lookingJob: 'C Developer',
                    isLookingJob: true
                }
            ]
        }
    },
    _subscriber() {},
    subscribe(fn) {
        this._subscriber = fn
    },
    dispatch(action) {
        this._state.homePage = profilePageReducer(this._state.homePage, action)
        this._state.messagePage = messagesPageReducer(this._state.messagePage, action)
        this._subscriber(this._state)
    },
    getState() {
        return this._state
    }
}