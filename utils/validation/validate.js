import * as yup from 'yup';

export const  validateOtpPhone = yup.object().shape({
    otpPhone: yup.string().min(9).max(14).required()
})

export const validateOtpKey = yup.object().shape({
    otpKey: yup.string().min(6).required("Please provide your otp key")
})


export const loginOneValidate = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().test(
        "regex",
        "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
        val => {
          let regExp = new RegExp("^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$");
          return regExp.test(val);
        }
      )
    // password: yup.string().min(5).required()
})

export const loginTwoValidate = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
})
