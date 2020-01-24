import Reaact, {useState} from 'react'
import {Formik} from 'formik'
import Typography from '@material-ui/core/Typography';
import PaymentForm from '../../../components/checkout/payment-form'
import { checkoutPaymentFormValidate } from '../../../utils/validation/validate'

const Form = (props) => {
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expDate, setExpDate] = useState('');
    const [isSaveCard, setIsSaveCard] = useState('');
    const {handleNext, handleBack} = props;
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Formik
                component={PaymentForm}
                initialValues={{cardName, cardNumber, cvv, expDate, isSaveCard, handleBack}}
                validationSchema={checkoutPaymentFormValidate}
                validateOnBlur={true}
                validateOnChange={false}
                onSubmit={(values, formikBag) => {
                    if(values.caardNumber !== '123456'){
                        console.log(values)
                        formikBag.setErrors({cardNumber: 'Please provide a valid card number 123456!'})
                    }else {
                        console.log(values)
                        handleNext();
                        formikBag.resetForm()
                    }
                }}
            />
        </>
    )
}
export default Form