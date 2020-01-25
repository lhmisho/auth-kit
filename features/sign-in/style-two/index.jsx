import React, {useState} from 'react'
import { Formik } from 'formik'
import Form from '../../../components/SignIn'
import { loginTwoValidate } from '../../../utils/validation/validate'
import { useDispatch, useSelector, connect} from 'react-redux'
import {login} from '../../../store/auth-reducer'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    return (
        <React.Fragment>
            <Formik
                component={Form}
                initialValues={{email, password}}
                validationSchema={loginTwoValidate}
                validateOnBlur={true}
                validateOnChange={false}
                onSubmit={(values, formikBag) => {
                    // if(values.email !== 'lhmisho@gmail.com'){
                    //     formikBag.setErrors({email: 'wrong email bitch'})
                    // }else{
                    //     console.log(values)
                    //     formikBag.resetForm()
                    // }
                    dispatch(login(values))
                }}
            />
        </React.Fragment>
    )
}
export default LoginForm
