import React from 'react';
import Link from 'next/link'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
// icons 
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';
import BorderClearOutlinedIcon from '@material-ui/icons/BorderClearOutlined';

// import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '../../shared/CustomButtons/Button';
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
    formControl: {
        margin: theme.spacing(0),
        minWidth: '100%',
    },
}));

const Form = ({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => {
    const classes = useStyles();
    console.log(errors)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="firstName"
                            name="firstName"
                            label="First name"
                            autoComplete="fname"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.firstName && touched.firstName ? true : false}
                            helperText={errors.firstName ? errors.firstName : ''}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><AccountBoxIcon /></InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            autoComplete="lname"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.lastName && touched.lastName ? true : false}
                            helperText={errors.lastName ? errors.lastName : ''}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><AccountBoxIcon /></InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="email"
                            name="email"
                            label="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.email && touched.email ? true : false}
                            helperText={errors.email ? errors.email : ''}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><AlternateEmailIcon /></InputAdornment>
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            // size="medium"
                            id="username"
                            name="username"
                            label="Username"
                            autoComplete="username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.username && touched.username ? true : false}
                            helperText={errors.username ? errors.username : ''}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><AccountBoxIcon /></InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            // size="small"
                            id="mobile"
                            name="mobile"
                            label="Mobile"
                            value={values.mobile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.mobile && touched.mobile ? true : false}
                            helperText={errors.mobile ? errors.mobile : ''}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><PhoneAndroidOutlinedIcon /></InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            // size="medium"
                            id="password"
                            name="password"
                            label="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.password && touched.password ? true : false}
                            helperText={errors.password ? errors.password : ''}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><LockOpenOutlinedIcon /></InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            type="textarea"
                            // size="small"
                            id="password2"
                            name="password2"
                            label="Confirm password"
                            value={values.password2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.password2 && touched.password2 ? true : false}
                            helperText={errors.password2 ? errors.password2 : ''}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><LockOpenOutlinedIcon /></InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            rows="1"
                            multiline
                            label="Address line 1"
                            id="standard-multiline-static"
                            variant="outlined"
                            aria-label="Address"
                            placeholder="Address"
                            name="address1"
                            value={values.address1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.address1 && touched.address1 ? true : false}
                            helperText={errors.address1 ? errors.address1 : ''}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><LocationOnOutlinedIcon /></InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl variant="outlined" className={classes.formControl} error={errors.country && touched.country ? true : false}>
                            <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                            <Select
                                name="country"
                                value={values.country}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    name: 'country',
                                    id: 'age-native-simple',
                                }}
                                helperText={errors.country ? errors.country : ''}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><LocationOnOutlinedIcon /></InputAdornment>,
                                }}
                            >
                                <MenuItem value="">Country</MenuItem>
                                <MenuItem value={'Bangladesh'}>Bangladesh</MenuItem>
                                <MenuItem value={'India'}>India</MenuItem>
                                <MenuItem value={'Pakistan'}>Pakistan</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="city"
                            name="city"
                            label="City"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.city && touched.city ? true : false}
                            helperText={errors.city ? errors.city : ''}
                            className={classes.formControl}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><LocationCityOutlinedIcon /></InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.state && touched.state ? true : false}
                            helperText={errors.state ? errors.state : ''}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><BorderClearOutlinedIcon /></InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="zip"
                            variant="outlined"
                            name="zipcode"
                            label="Zip / Postal code"
                            autoComplete="billing postal-code"
                            value={values.zipcode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.zipcode && touched.zipcode ? true : false}
                            helperText={errors.zipcode ? errors.zipcode : ''}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><BorderClearOutlinedIcon /></InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button type="button" color="success">SUBMIT</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Link href="/signin/sign-in-one">
                            <a variant="body2">{"Already have an account? Sign Up"}</a>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}
export default Form