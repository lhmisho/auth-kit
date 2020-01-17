import React from 'react'
import LoginForm from '../../features/sign-in/style-one'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const Root = () => {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <LoginForm />
        </Container>
    )
}
export default Root