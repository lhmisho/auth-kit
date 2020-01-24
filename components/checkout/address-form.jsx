import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function AddressForm({values, handleSubmit, handleChange, handleBlur, errors, touched}) {
    const classes = useStyles();
    console.log(errors)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="fname"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.firstName && touched.firstName ? true : false}
                            helperText={errors.firstName ? errors.firstName : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            autoComplete="lname"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.lastName && touched.lastName ? true : false}
                            helperText={errors.lastName ? errors.lastName : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            autoComplete="billing address-line1"
                            value={values.address1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.address1 && touched.address1 ? true : false}
                            helperText={errors.address1 ? errors.address1 : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            autoComplete="billing address-line2"
                            value={values.address2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.address2 && touched.address2 ? true : false}
                            helperText={errors.address2 ? errors.address2 : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="city"
                            name="city"
                            label="City"
                            autoComplete="billing address-level2"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.city && touched.city ? true : false}
                            helperText={errors.city ? errors.city : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.state && touched.state ? true : false}
                            helperText={errors.state ? errors.state : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="zip"
                            name="zipcode"
                            label="Zip / Postal code"
                            autoComplete="billing postal-code"
                            value={values.zipcode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.zipcode && touched.zipcode ? true : false}
                            helperText={errors.zipcode ? errors.zipcode : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="country"
                            name="country"
                            label="Country"
                            autoComplete="billing country"
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.country && touched.country ? true : false}
                            helperText={errors.country ? errors.country : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                            label="Use this address for payment details"
                        />
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Next
                    </Button>
                </Grid>
            </form>
        </>
    );
}