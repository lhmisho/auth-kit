import React, {useState} from 'react'
import AddressForm from '../../../components/checkout/address-form'
import Typography from '@material-ui/core/Typography';
import { Formik } from 'formik'
import { checkoutAddressFormValidate } from "../../../utils/validation/validate"
import {addAddress} from '../../../store/reducers/checkout-reducer'
import {useDispatch, useSelector, connect} from 'react-redux'

const Form = (props) => {
    const dispatch = useDispatch();
    const address = useSelector(state => state.checkout.address)

    const [firstName, setFirstName] = useState(address.firstName);
    const [lastName, setLastName] = useState(address.lastName);
    const [address1, setAddress1] = useState(address.address1);
    const [address2, setAddress2] = useState(address.address2);
    const [city, setCity] = useState(address.city);
    const [state, setState] = useState(address.state);
    const [country, setCountry] = useState(address.country);
    const [zipcode, setZipcode] = useState(address.zipcode);
    const [isSaveAddress, setIsSaveAddress] = useState(address.isSaveAddress);

    // console.log("=========================")
    // console.log(address)
    // console.log(props)
    // console.log("=========================")

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
                        console.log(values);
                        dispatch(addAddress(values));
                        props.handleNext();
                        formikBag.resetForm();
                    }
                }} />
        </>
    )
}

export default Form