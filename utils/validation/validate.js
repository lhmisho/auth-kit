import * as yup from 'yup';

export const  validateOtpPhone = yup.object().shape({
    otpPhone: yup.string().min(9).max(14).required()
})

export const validateOtpKey = yup.object().shape({
    otpKey: yup.string().min(6).required("Please provide your otp key")
})