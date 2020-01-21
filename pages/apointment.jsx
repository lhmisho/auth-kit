import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider, KeyboardTimePicker } from "@material-ui/pickers";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        // textAlign: 'center', 
        marginTop: theme.spacing(3),
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

const Root = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [gender, setGender] = useState('');
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    const handleChange = event => {
        setAge(event.target.value);
    };
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: true,
    });

    const handleSwitch = name => event => {
        setState({ ...state, [name]: event.target.checked });
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
                            <Avatar src="/images/doctor.JPG"/>
                            <Typography component="h1" variant="h5">
                                Doctor Abrara Hossain.special hospital
                            </Typography>
                            <form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>

                                    </Grid>
                                    <Grid item xs={12}>
                                        <Paper>
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
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Paper className={classes.formControl}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    disableToolbar
                                                    variant="inline"
                                                    value={selectedDate}
                                                    placeholder="10/10/2018"
                                                    onChange={date => handleDateChange(date)}
                                                    minDate={new Date()}
                                                    format="MM/dd/yyyy"
                                                />
                                            </MuiPickersUtilsProvider>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Paper className={classes.formControl}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardTimePicker
                                                    // margin="normal"
                                                    id="time-picker"
                                                    variant="outlined"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change time',
                                                    }}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Paper className={classes.formControl}>
                                            <FormControlLabel
                                                label="Have you visited this hospital before?"
                                                labelPlacement="start"
                                                control={
                                                    <Switch
                                                        checked={state.checkedA}
                                                        onChange={handleSwitch('checkedB')}
                                                        value="checkedA"
                                                        color="primary"
                                                    />
                                                }
                                            />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Paper>
                                            <FormControl className={classes.formControl}>
                                                <TextField id="outlined-basic" variant="outlined" size="small" label="Enter your name" />
                                            </FormControl>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Paper>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-label">Country Code</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={"+91"}>INDIA (+91)</MenuItem>
                                                    <MenuItem value={"+880"}>BAN (+91)</MenuItem>
                                                    <MenuItem value={"+61"}>AUS (+61)</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Paper>
                                            <FormControl className={classes.formControl}>
                                                <TextField id="outlined-basic" variant="outlined" size="small" label="Enter your name" />
                                            </FormControl>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Paper>
                                            <FormControl className={classes.formControl}>
                                                <TextField id="outlined-basic" variant="outlined" size="small" label="Enter your email" />
                                            </FormControl>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Paper>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-label">Select your age</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value="20">20</MenuItem>
                                                    <MenuItem value="25">25</MenuItem>
                                                    <MenuItem value="30">30</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Paper>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={gender}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value="male">Male</MenuItem>
                                                    <MenuItem value="female">Female</MenuItem>
                                                    <MenuItem value="other">Other</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Paper>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                            >
                                                Sign In
                                            </Button>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Root


