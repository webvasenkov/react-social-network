import React from 'react'
import ButtonIcon from './control/ButtonIcon'
import {Login} from '../icons'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import classNames from "classnames"
import * as yup from "yup"
import {LoginFormContent} from "../../utils/content";

const schema = yup.object().shape({
    email: yup.string().required().email("enter correct email"),
    password: yup.string().required(),
});

function LoginPageForm({handlerLoginForm}) {

    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => handlerLoginForm(data)


    return (
        <form className="login-page__form" onSubmit={handleSubmit(onSubmit)}>
            <label className="login-page__title">LogIn</label>
            {LoginFormContent.inputs.map((input, i) => {
                console.log(!!errors[input.name]?.message)
                return (
                    <div key={i + input.name}>
                        <input
                            className={classNames("input", "login-page__input", {"input_error": !!errors[input.name]?.message})}
                            ref={register}
                            {...input}
                        />
                        <span className="error error_display login-page__error">
                            {errors[input.name]?.message}
                        </span>
                    </div>
                )
            })}
            <ButtonIcon
                className="login-page__login-button"
                name="Login"
                icon={<Login className="icon-default"/>}
            />
        </form>
    )
}

export default LoginPageForm;