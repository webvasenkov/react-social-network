import avatar1 from '../assets/img/shared/avatar-2.jpg'
import avatar2 from '../assets/img/shared/avatar-3.jpg'
import avatar3 from '../assets/img/shared/avatar-4.jpg'
import avatar4 from '../assets/img/shared/avatar-5.jpg'
import avatar5 from '../assets/img/shared/avatar-6.jpg'

export const store = {
    messagePage: {
        dialogData: [
            {
                id: '1',
                avatar: avatar1,
                userName: 'Marco Liviu',
                snippetMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                date: '01/09/2021',
                isSelected: false
            },
            {
                id: '2',
                avatar: avatar2,
                userName: 'Kristen Sayaka',
                snippetMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                date: '01/05/2021',
                isSelected: false
            },
            {
                id: '3',
                avatar: avatar3,
                userName: 'Chrissie Antal',
                snippetMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                date: '01/07/2021',
                isSelected: false
            },
            {
                id: '4',
                avatar: avatar4,
                userName: 'Ethan Gherardo',
                snippetMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                date: '01/03/2021',
                isSelected: false
            },
            {
                id: '5',
                avatar: avatar5,
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
    }
}