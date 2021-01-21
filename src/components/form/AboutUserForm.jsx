import React from 'react'
import InputIcon from './control/InputIcon'
import ButtonIcon from './control/ButtonIcon'
import {User, Brain, Eye, Instagram, Facebook, Twitter, Update} from '../icons'
import Avatar from '../user/Avatar';
import {useForm} from 'react-hook-form'

function AboutUserForm({
                           photos,
                           fullName,
                           profileStatus,
                           lookingForAJobDescription,
                           contacts,
                           putProfileStatus,
                           putProfile,
                           userAuthId,
                           handleUpdate,
                       }) {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            fullName,
            status: profileStatus,
            lookingForAJobDescription: lookingForAJobDescription === "empty" ? '' : lookingForAJobDescription,
            facebook: contacts.facebook,
            twitter: contacts.twitter,
            instagram: contacts.instagram
        }
    })

    const onSubmit = (data) => {
        const {fullName, status, lookingForAJobDescription, facebook, twitter, instagram} = data
        const newProfile = {
            userId: userAuthId,
            fullName,
            lookingForAJobDescription: lookingForAJobDescription || "empty",
            lookingForAJob: Boolean(lookingForAJobDescription),
            AboutMe: "empty",
            contacts: {
                facebook,
                twitter,
                instagram
            }
        }

        putProfileStatus(status)
        putProfile(newProfile)
        handleUpdate()
    }

    return (
        <form className="about__user-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="about__bio-photo">
                <Avatar className="about__avatar-img" avatar={photos.large} about edit/>
            </div>
            <div className="about__setting-bio">
                <InputIcon
                    name="fullName"
                    register={register}
                    placeholder="What is your name?"
                    icon={<User className="icon-purple"/>}

                />
                <InputIcon
                    name="status"
                    register={register}
                    placeholder="What do you think about..."
                    icon={<Brain className="icon-green"/>}
                />
                <InputIcon
                    name="lookingForAJobDescription"
                    register={register}
                    placeholder="What kind of job are you looking for?"
                    icon={<Eye className="icon-yellow"/>}
                />
            </div>
            <div className="about__setting-links">
                <InputIcon
                    name="instagram"
                    register={register}
                    className="about__setting-link"
                    placeholder="@login"
                    icon={<Instagram className="icon-gray"/>}
                />
                <InputIcon
                    name="facebook"
                    register={register}
                    className="about__setting-link"
                    placeholder="@facebook"
                    icon={<Facebook className="icon-gray"/>}
                />
                <InputIcon
                    name="twitter"
                    register={register}
                    className="about__setting-link"
                    placeholder="@twitter"
                    icon={<Twitter className="icon-gray"/>}
                />
                <ButtonIcon
                    name="Update"
                    className="about__update-button"
                    icon={<Update className="icon-default"/>}
                />
            </div>
        </form>
    )
}

export default AboutUserForm;