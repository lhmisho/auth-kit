import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const PaymentForm = ({values, handleSubmit, handleChange, handleBlur, errors, touched}) => {
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="cardName"
                        label="Name on card"
                        name="cradName"
                        value={values.cardName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.cardName && touched.cardName ? true : false}
                        helperText={errors.cardName ? errors.cardName : ''}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="cardNumber"
                        label="Card number"
                        fullWidth
                        name="cardNumber"
                        value={values.cardNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.cardNumber && touched.cardNumber ? true : false}
                        helperText={errors.cardNumber ? errors.cardNumber : ''}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="expDate"
                        label="Expiry date"
                        fullWidth
                        name="expDate"
                        value={values.expDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.expDate && touched.expDate ? true : false}
                        helperText={errors.expDate ? errors.expDate : ''}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        name="cvv"
                        value={values.cvv}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.cvv && touched.cvv ? true : false}
                        helperText={errors.cvv ? errors.cvv : ''}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes"/>}
                        label="Remember credit card details for next time"
                    />
                </Grid>
                <div className={classes.buttons}>
                    <Button onClick={() => {
                        values.handleBack()
                    }} className={classes.button}>
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.button}
                    >
                        Next
                    </Button>
                </div>
            </Grid>
        </form>
    );
}
export default PaymentForm