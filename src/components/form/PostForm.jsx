import React from 'react'
import ButtonIcon from './control/ButtonIcon'
import {Post} from '../icons'
import {useForm} from 'react-hook-form'

function PostForm({addPost}) {
    const {register, handleSubmit} = useForm()
    const onSubmit = ({postText}) => addPost(postText)

    return (
        <form className="post-form profile-page__post-form" onSubmit={handleSubmit(onSubmit)}>
            <textarea
                className="textarea"
                name="postText"
                ref={register}
                placeholder="Write post..."
            />
            <ButtonIcon
                className={'post-form__post-button'}
                name="Post"
                icon={<Post className="icon-default"/>}
            />
        </form>
    )
}

export default PostForm;