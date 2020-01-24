import React, {useState} from 'react'
import AddressForm from '../../../components/checkout/address-form'
import Typography from '@material-ui/core/Typography';
import { Formik } from 'formik'
import { checkoutAddressFormValidate } from "../../../utils/validation/validate"

const Form = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [isSaveAddress, setIsSaveAddress] = useState('');

    console.log(props)
    return(
        <>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Formik
                component={AddressForm}
                initialValues={{firstName, lastName, address1, address2, city, country, state, zipcode, isSaveAddress}}
                validationSchema={checkoutAddressFormValidate}
                validateOnBlur={true}
                validateOnChange={false}
                onSubmit={(values, formikBag) => {
                    if(values.firstName !== "lokman"){
                        formikBag.setErrors({firstName: 'Please provide your name as lokman'})
                    }else {
                        console.log(values)
                        props.handleNext()
                        formikBag.resetForm()
                    }
                }} />
        </>
    )
}
export default Form