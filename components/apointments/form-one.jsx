import React, {useState, useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider, KeyboardTimePicker } from "@material-ui/pickers";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';

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
    ageSelect: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

const Form = ({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => {
    const classes = useStyles();
    return(
        <>
            <Avatar src="/images/doctor.JPG"/>
            <Typography component="h1" variant="h5">
                Doctor Abrar Hossain.special hospital
            </Typography>
        <Grid container>
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
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={values.selectedDate}
                        onChange={date => values.setSelectedDate(date)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                        // margin="normal"
                        id="time-picker"
                        variant="outlined"
                        value={values.selectedTime}
                        onChange={time => values.setSelectedTime(time)}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="name"
                    label="Enter your name"
                    type="text"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name && touched.name ? true : false}
                    helperText={errors.name ? errors.name : ''}
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
                <FormControlLabel
                    labelPlacement="start"
                    label="Have you visited this hospital before?"
                    control={<Switch checked={values.isVisited} onChange={() => values.setIsVisited(values.isVisited = !values.isVisited)} value={values.isVisited} />}
                />

                    <Grid item xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                            <Select
                                native
                                name="age"
                                value={values.age}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-native-simple',
                                }}
                            >
                                <option value="12">12</option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
                            <Select
                                native
                                name="gender"
                                value={values.gender}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'gender',
                                    id: 'age-native-simple',
                                }}
                            >
                                <option value={'male'}>Male</option>
                                <option value={'female'}>Female</option>
                                <option value={'other'}>Other</option>
                            </Select>
                        </FormControl>
                    </Grid>
                <Grid item xs={4}>
                    <FormControl className={classes.formControl}>
                        <Select
                            native
                            name="phoneCc"
                            value={values.phoneCc}
                            onChange={handleChange}
                            inputProps={{
                                name: 'phoneCc',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value={'+91'}>+91(IND)</option>
                            <option value={'+92'}>+92(PAK)</option>
                            <option value={'+880'}>+880(BAN)</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="phone"
                        label="Enter your Mobile Number"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.phone && touched.phone ? true : false}
                        helperText={errors.phone ? errors.phone : ''}
                    />
                </Grid>
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
        </Grid>
        </>
    )
};
export default Form