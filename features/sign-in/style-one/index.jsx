import React, { useState } from 'react'
import {useDispatch, useSelector, connect} from 'react-redux'
import { Formik } from 'formik'
import { loginOneValidate } from '../../../utils/validation/validate'
import { login } from '../../../store/auth-reducer'
import Form from '../../../components/SignIn'


const values = {
    email: '',
    password: ''
}

const LoginForm = (props) => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    console.log(user)
    props.errors && props.errors && props.errors.non_field_errors[0] && console.log(props.errors.non_field_errors[0])

    return (
        <React.Fragment>
            <Formik
                component={Form}
                enableReinitialize={true}
                initialValues={values}
                validationSchema={loginOneValidate}
                validateOnBlur={true}
                initialErrors={user.error}
                validateOnChange={false}
                onSubmit={(values, formikBag) => {
                    dispatch(login(values))
                    formikBag.resetForm()
                }}
            />
        </React.Fragment>
    )
}

export default LoginForm