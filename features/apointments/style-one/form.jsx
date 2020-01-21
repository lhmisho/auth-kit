import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core/styles/index";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import {Formik} from 'formik'
import Form from '../../../components/apointments/form-one'

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
}));
const BaseForm = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [hospitalName, setHospitalName] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, seSselectedTime] = useState(new Date());
    return (
        <Grid item xs={6} style={{backgroundColor: '#fff', height: '100vh'}}>
            <Paper className={classes.paper} style={{height: '90vh'}}>
                <Formik
                    component={Form}
                    initialValues={{name, email, mobile, hospitalName, selectedDate, selectedTime, setSelectedDate}}
                    validateOnBlur={true}
                    validateOnChange={false}
                    onSubmit={(values, formikBag) => {
                    console.log(values);
                    formikBag.resetForm();
                }}/>
            </Paper>
        </Grid>
    )
};
export default BaseForm