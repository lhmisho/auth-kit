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


export const simpleSignupValidate = yup.object().shape({
    fullName: yup.string().email().required("Pleasae provide your Full Name"),
    email: yup.string().email().required("Please provide your Email!"),
    phone: yup.number().min(7).max(13).required("Please you phone"),
    password: yup.string().min(6, "Password must be six contains six character").required("Please provide your password"),
    password2: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match').required("Please confirm your password!")
})

export const checkoutAddressFormValidate = yup.object().shape({
    firstName: yup.string().required("Please provide your first name"),
    lastName: yup.string().required("Please provide your last name"),
    address1: yup.string().required("Plase provide your address!"),
    city: yup.string().required("Plase provide your city!"),
    country: yup.string().required("Plase provide your country!"),
    zipcode: yup.string().required("Plase provide your zipcode!")
})

export const checkoutPaymentFormValidate = yup.object().shape({
    cardName: yup.string().required("Please provide your card name!"),
    cardNumber: yup.number().required("Please provide your card number"),
    expDate: yup.string().required("Please provide your card exp date"),
    cvv: yup.string().required("Please provide your card CVV")
})
