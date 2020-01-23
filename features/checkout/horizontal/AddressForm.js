import React, {useState} from 'react'
import AddressForm from '../../../components/checkout/address-form'
import Typography from '@material-ui/core/Typography';
import { Formik } from 'formik'
const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [isSaveAddress, setIsSaveAddress] = useState('');

    return(
        <>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Formik
                component={AddressForm}
                initialValues={{firstName, lastName, address1, address2, city, country, state, zipcode}}
                validateOnBlur={true}
                validateOnChange={false}
                onSubmit={(values, formikBag) => {
                    console.log(values)
                }}/>
        </>
    )
}
export default Form