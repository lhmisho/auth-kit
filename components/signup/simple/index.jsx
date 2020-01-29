import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import SocialSignIn from '../../icons/social-sign-in'


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

export default function SignIn({ values, handleSubmit, handleChange, handleBlur, errors, touched }) {
    const classes = useStyles();
    return (
        <>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
                </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="fullName"
                    label="Full Name*"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.fullName && touched.fullName ? true : false}
                    helperText={errors.fullName ? errors.fullName : ''}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email ? true : false}
                    helperText={errors.email ? errors.email : ''}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="phone"
                    name="phone"
                    label="Phone"
                    onChange={handleChange}
                    value={values.phone}
                    onBlur={handleBlur}
                    error={errors.phone && touched.phone ? true : false}
                    helperText={errors.phone ? errors.phone : ''}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password && touched.password ? true : false}
                    helperText={errors.password ? errors.password : ''}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password2"
                    label="Confirm password"
                    type="password2"
                    id="password2"
                    value={values.password2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password2 && touched.password2 ? true : false}
                    helperText={errors.password2 ? errors.password2 : ''}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                    </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="/reset">
                            <a variant="body2">Forgot password?</a>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/signup/flat">
                            <a variant="body2">{"Don't have an account? Sign Up"}</a>
                        </Link>
                    </Grid>
                </Grid>
            </form>
            <SocialSignIn />
        </>
    );
}