import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider, KeyboardTimePicker } from "@material-ui/pickers";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: '100%',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

const Form = ({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => {
    const classes = useStyles();
    const handleDate = (date) =>{
        console.log(date)
        // values.setSelectedDate(date)
    }
    return(
        <>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Select your desired Hospital</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="hospitalName"
                        value={values.hospitalName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.hospitalName && touched.hospitalName ? true : false}
                    >
                        <MenuItem value={10} selected>Apollo Hospitals, Visakhapatnam</MenuItem>
                        <MenuItem value={20}>Government Hospital For Mental Care</MenuItem>
                        <MenuItem value={30}>Government Regional Eye Hospital</MenuItem>
                    </Select>
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        name="selectedDate"
                        value={values.selectedDate}
                        placeholder="10/10/2018"
                        onChange={handleDate()}
                        minDate={new Date()}
                        format="MM/dd/yyyy"
                    />
                </MuiPickersUtilsProvider>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                        // margin="normal"
                        id="time-picker"
                        variant="outlined"
                        value={values.selectedTime}
                        onChange={handleChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </MuiPickersUtilsProvider>
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
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
            </form>
        </>
    )
};
export default Form