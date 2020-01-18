import React from 'react'
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
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            variant="outlined"
                            name="otpKey"
                            fullWidth
                            id="otp"
                            label="Enter OTP"
                            value={values.otpKey}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.otpKey && touched.otpKey ? true : false}
                            helperText={errors.otpKey ? errors.otpKey : ''}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <p className={classes.submit}>Don't get otp ?
                            <Link href="/resend"><a>resend</a></Link></p>
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