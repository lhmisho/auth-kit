import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core/styles/index";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import {Formik} from 'formik'
import Form from '../../../components/apointments/form-one';
import {apointment} from '../../../store/auth-reducer';
import {useDispatch} from 'react-redux';

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
    const [hospitalName, setHospitalName] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [isVisited, setIsVisited] = useState(false);
    const [phoneCc, setPhoneCc] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const dispatch = useDispatch();

    console.log(selectedDate)
    // console.log(selectedTime)
    return (
        <Grid item xs={6} style={{backgroundColor: '#fff', height: '100vh'}}>
            <Paper className={classes.paper} style={{height: '90vh'}}>
                <Formik
                    component={Form}
                    initialValues={
                        {
                            name,
                            email,
                            hospitalName,
                            selectedDate,
                            selectedTime,
                            setSelectedDate,
                            setSelectedTime,
                            age,
                            gender,
                            phone,
                            phoneCc,
                            isVisited,
                            setIsVisited
                        }
                    }
                    validateOnBlur={true}
                    enableReinitialize={true}
                    validateOnChange={false}
                    onSubmit={(values, formikBag) => {
                        dispatch(apointment(values));
                        console.log(values);
                        formikBag.resetForm();
                    }}/>
            </Paper>
        </Grid>
    )
};
export default BaseForm