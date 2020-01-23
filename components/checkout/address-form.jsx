import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm({values, handleSubmit, handleChange, handleBlur, errors, touched}) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="fname"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.email && touched.email ? true : false}
                            helperText={errors.email ? errors.email : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
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
                            required
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
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
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            fullWidth
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
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
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
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.state && touched.state ? true : false}
                            helperText={errors.state ? errors.state : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
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
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="billing country"
                            value={values.address1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.address1 && touched.address1 ? true : false}
                            helperText={errors.address1 ? errors.address1 : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                            label="Use this address for payment details"
                        />
                    </Grid>
                </Grid>
            </form>
        </>
    );
}