import React, { useState } from 'react'
import { Formik } from 'formik'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Form from '../../../components/SignIn/otp/otp-phone'
import { validateOtpPhone } from '../../../utils/validation/validate'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const LoginForm = () => {
    const [otpPhone, setOtpPhone] = useState('')
    const [open, setOpen] = React.useState(false);
    const handleClick = (v, e) => {
        console.log(v)
        setOtpPhone(v.otpPhone)
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <React.Fragment>
            <Formik
                component={Form}
                initialValues={{ otpPhone }}
                validationSchema={validateOtpPhone}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={(values, formikBag) => {handleClick(values, formikBag)} }
            />
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    OTP has been send to your phone + {otpPhone}
                </Alert>
            </Snackbar>
        </React.Fragment>
    )
}
export default LoginForm
