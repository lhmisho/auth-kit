import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';

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
        margin: theme.spacing(3, 0, 2),
    }
}));


const OTPSignIn = ({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => {
    const classes = useStyles();
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
                            autoComplete="fname"
                            name="otpPhone"
                            variant="outlined"
                            fullWidth
                            id="firstName"
                            label="Send otp"
                            value={values.otpPhone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.otpPhone && touched.otpPhone ? true : false}
                            helperText={errors.otpPhone ? errors.otpPhone : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            send
                            </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <small>OTP send to 099923432</small>
                        <TextField
                            variant="outlined"
                            name="otpKey"
                            required
                            fullWidth
                            id="otp"
                            label="Enter OTP"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.otpKey && touched.otpKey ? true : false}
                            helperText={errors.otpKey ? errors.otpKey : ''}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <p className={classes.submit}>Don't get otp ?
                            <Link href="#" variant="body2">
                                resend
                            </Link></p>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    VERIFY
          </Button>
            </form>
        </>
    )
}

export default OTPSignIn