import React from 'react'
import Description from "./Description";
import AboutUserForm from "../form/AboutUserForm"

function AboutUser(props) {
    const [editMode, setEditMode] = React.useState(false)
    const handleClickSetting = () => setEditMode(true)
    const handleUpdate = () => setEditMode(false)

    const description = !editMode && <Description {...props} handleClickSetting={handleClickSetting}/>
    const aboutUserForm = editMode && <AboutUserForm {...props} handleUpdate={handleUpdate}/>
    return (
        <div className="about">
            <div className="about__wrapper">
                {description}
                {aboutUserForm}
            </div>
        </div>
    )
}

export default AboutUser;

