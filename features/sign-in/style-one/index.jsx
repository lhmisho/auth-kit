import React, { useState } from 'react'
import {useDispatch, useSelector, connect} from 'react-redux'
import Form from '../../../components/SignIn'
import { Formik } from 'formik'
import { loginOneValidate } from '../../../utils/validation/validate'
import { login } from '../../../store/auth-reducer'



const LoginForm = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    console.log(user)
    props.errors && props.errors && props.errors.non_field_errors[0] && console.log(props.errors.non_field_errors[0])

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
                    formikBag.resetForm()
                }}
            />
        </React.Fragment>
    )
}

const mapStateToProps = state =>({
    errors: state.user.error
})

export default connect(mapStateToProps, {})(LoginForm)