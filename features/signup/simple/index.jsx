import React, {useState} from 'react'
import { Formik } from 'formik'
import { loginTwoValidate } from '../../../utils/validation/validate'
import { useDispatch, useSelector} from 'react-redux'
import {signup} from '../../../store/auth-reducer'
import Form from '../../../components/signup/simple'

const LoginForm = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)

    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    return (
        <React.Fragment>
            <Formik
                component={Form}
                validateOnBlur={true}
                validateOnChange={false}
                enableReinitialize={true}
                validationSchema={loginTwoValidate}
                initialValues={{fullName, email, password, phone, password2}}
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
