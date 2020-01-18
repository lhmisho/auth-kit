import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    }
}));


const OTPSignIn = ({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => {
    const classes = useStyles();
    console.log(errors)
    return (
        <>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
                </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={8} lg={8}>
                        <TextField
                            name="otpPhone"
                            variant="outlined"
                            fullWidth
                            id="otpPhone"
                            label="Send otp"
                            value={values.otpPhone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.otpPhone && touched.otpPhone ? true : false}
                            helperText={errors.otpPhone ? errors.otpPhone : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Fab variant="extended" type="submit">
                            <NavigationIcon className={classes.extendedIcon} />
                            submit
                        </Fab>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default OTPSignIn