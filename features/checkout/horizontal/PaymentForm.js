import Reaact, {useState} from 'react'
import {Formik} from 'formik'
import Typography from '@material-ui/core/Typography';
import PaymentForm from '../../../components/checkout/payment-form'

const Form = () => {
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expDate, setExpDate] = useState('');
    const [isSaveCard, setIsSaveCard] = useState('');

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Formik
                component={PaymentForm}
                initialValues={{cardName, cardNumber, cvv, expDate, isSaveCard}}
                validateOnBlur={true}
                validateOnChange={false}
                onSubmit={(values, formikBag) => {
                    console.log(values)
                }}
            />
        </>
    )
}
export default Form