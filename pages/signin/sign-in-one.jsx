import React from 'react'
import LoginForm from '../../features/sign-in/style-one'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import shadows from '@material-ui/core/styles/shadows';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden'
    }
}));

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Root = () => {
    let classes = useStyles();
    return (
        <div style={{
            backgroundImage: "url(" + '/images/bg3.jpg' + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            height: 800,
            overflow: 'hidden'
        }}>
            <Container component="main" maxWidth="xs" style={{ backgroundColor: '#fff'}} >
                <CssBaseline />
                <div className={classes.paper}>
                    <LoginForm />
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    )
}
export default Root