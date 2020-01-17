import React, {useState} from 'react'
import { Formik } from 'formik'
import Form from '../../../components/SignIn'
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
})

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <React.Fragment>
            <Formik
                component={Form}
                initialValues={{email, password}}
                validationSchema={validationSchema}
                validateOnBlur={true}
                validateOnChange={false}
                onSubmit={(values, formikBag) => {
                    if(values.email !== 'lhmisho@gmail.com'){
                        formikBag.setErrors({email: 'wrong email bitch'})
                    }else{
                        console.log(values)
                        formikBag.resetForm()
                    }
                }}
            />
        </React.Fragment>
    )
}
export default LoginForm
