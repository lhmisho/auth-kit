import React, { useState } from 'react'
import Form from '../../../components/SignIn/form'
import { Formik } from 'formik'
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().test(
        "regex",
        "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
        val => {
          let regExp = new RegExp("^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$");
          return regExp.test(val);
        }
      )
})

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <React.Fragment>
            <Formik
                component={Form}
                initialValues={{ email, password }}
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