import React, {useState} from 'react'
import { Formik } from 'formik'
import Form from '../../../components/SignIn/otp/otp-key'
import { validateOtpKey } from '../../../utils/validation/validate'

const LoginForm = () => {
    const [otpKey, setOtpKey] = useState('')
    return (
        <React.Fragment>
            <Formik
                component={Form}
                initialValues={{otpKey}}
                validationSchema={validateOtpKey}
                validateOnBlur={true}
                validateOnChange={false}
                onSubmit={(values, formikBag) => {
                    console.log(values.otpKey)
                }}
            />
        </React.Fragment>
    )
}
export default LoginForm
