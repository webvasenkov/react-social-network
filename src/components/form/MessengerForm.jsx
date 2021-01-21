import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import {Send} from '../icons'
import {useForm} from 'react-hook-form'

function MessengerForm({sendMessage}) {
    const {handleSubmit, register} = useForm()
    const onSubmit = ({text}) => sendMessage(text)

    return (
        <form className="messenger__form" onSubmit={handleSubmit(onSubmit)}>
            <TextareaAutosize
                className="messenger__form-textarea"
                placeholder="Write a message..."
                autoFocus
                minRows={1}
                maxRows={6}
                ref={register}
                name="text"
            />
            <button className="messenger__form-button">
                <Send className="icon-gray icon-gray_has-hover"/>
            </button>
        </form>
    )
}

export default MessengerForm;