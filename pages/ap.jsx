import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ApointmentForm from '../features/apointments/style-one'

const Root = () => {
    return(
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <ApointmentForm />
                </Container>
            </React.Fragment>
        </div>
    )
}

export  default Root