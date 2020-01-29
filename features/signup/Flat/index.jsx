import React, { useState } from 'react'
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector, connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { Formik } from 'formik'

import { checkoutAddressFormValidate } from "../../../utils/validation/validate"
import SingUpForm from '../../../components/signup/Flat'

const useStyles = makeStyles(theme => ({
    // appBar: {
    //     position: 'relative',
    // },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        // marginTop: theme.spacing(3),
        // marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            // marginTop: theme.spacing(6),
            // marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    }
}));


const Form = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    // const address = useSelector(state => state.checkout.address)

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [zipcode, setZipcode] = useState();

    // console.log("=========================")
    // console.log(address)
    // console.log(props)
    // console.log("=========================")

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                        Sign Up
                    </Typography>
                    <Formik
                        component={SingUpForm}
                        initialValues={{ firstName, lastName, address, city, country, state, zipcode }}
                        validationSchema={checkoutAddressFormValidate}
                        validateOnBlur={true}
                        validateOnChange={false}
                        onSubmit={(values, formikBag) => {
                            if (values.firstName !== "lokman") {
                                formikBag.setErrors({ firstName: 'Please provide your name as lokman' })
                            } else {
                                console.log(values);
                                // dispatch(addAddress(values));
                                // props.handleNext();
                                formikBag.resetForm();
                            }
                        }} />
                </Paper>
            </main>
         </React.Fragment>
    )
}

export default Form