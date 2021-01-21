import defaultAvatar from '../../assets/img/defaultAvatar.png';
import {getFakeMessage} from './helper';

const SEND_MESSAGE = 'MESSAGES/SEND_MESSAGE'

const initialState = {
    dialogsData: [
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
    messagesData: [
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
}

function messagesPageReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return getFakeMessage(state, action.text)
        default:
            return state
    }
}

// === ActionCreators ===
export function sendMessage(text) {
    return {
        type: SEND_MESSAGE,
        text
    }
}

export default messagesPageReducer;