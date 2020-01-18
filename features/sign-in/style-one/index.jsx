import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Form from '../../../components/SignIn'
import { Formik } from 'formik'
import { loginOneValidate } from '../../../utils/validation/validate'
import { login } from '../../../store/auth-reducer'


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    return (
        <React.Fragment>
            <Formik
                component={Form}
                initialValues={{ email, password }}
                validationSchema={loginOneValidate}
                validateOnBlur={true}
                validateOnChange={false}
                onSubmit={(values, formikBag) => {
                    dispatch(login(values))
                }}
            />
        </React.Fragment>
    )
}

export default LoginForm