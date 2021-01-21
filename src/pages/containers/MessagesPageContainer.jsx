import {compose} from 'redux'
import {connect} from 'react-redux'
import MessagesPage from '../MessagesPage'
import {sendMessage} from '../../redux/reducers/messagesPageReducer'
import {withAuthRedirect} from '../../components/hoc/withAuthRedirect';

function mapStateToProps({messagesPage}) {
    const {dialogsData, messagesData} = messagesPage

    return {
        dialogsData,
        messagesData,
    }
}

const mapDispatchToProps = {
    sendMessage
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(MessagesPage);