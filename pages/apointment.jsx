import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center', 
        marginTop: theme.spacing(3),
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 400,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Root = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    const handleChange = event => {
        setAge(event.target.value);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
                <Grid container spacing={0}>
                    <Grid item xs={6} style={{ backgroundColor: '#fff', height: '100vh' }}>
                        <Paper className={classes.paper} style={{ backgroundColor: '#128DD2', height: '90vh' }}>

                        </Paper>
                    </Grid>
                    <Grid item xs={6} style={{ backgroundColor: '#fff', height: '100vh' }}>
                        <Paper className={classes.paper} style={{ height: '90vh' }}>
                            <form>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Select your desired Hospital</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10} selected>Apollo Hospitals, Visakhapatnam</MenuItem>
                                        <MenuItem value={20}>Government Hospital For Mental Care</MenuItem>
                                        <MenuItem value={30}>Government Regional Eye Hospital</MenuItem>
                                    </Select>
                                </FormControl>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Root


