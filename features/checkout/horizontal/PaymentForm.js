import Reaact, {useState} from 'react'
import {useDispatch, useSelector, connect} from 'react-redux'
import {Formik} from 'formik'
import Typography from '@material-ui/core/Typography';
import PaymentForm from '../../../components/checkout/payment-form'
import { checkoutPaymentFormValidate } from '../../../utils/validation/validate'
import {addPayment} from '../../../store/reducers/checkout-reducer'

const Form = (props) => {
    const dispatch = useDispatch();
    const pInfo = useSelector(state => state.checkout.paymentInfo)

    const [cardName, setCardName] = useState(pInfo.cardName ? pInfo.cardName: '');
    const [cardNumber, setCardNumber] = useState(pInfo.cardNumber ? pInfo.cardNumber: '');
    const [cvv, setCvv] = useState(pInfo.cvv ? pInfo.cvv: '');
    const [expDate, setExpDate] = useState(pInfo.expDate ? pInfo.expDate: '');
    const [isSaveCard, setIsSaveCard] = useState(pInfo.isSaveAddress ? pInfo.isSaveAddress: false);
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
                    if(values.cardNumber !== '123456'){
                        console.log(values)
                        formikBag.setErrors({cardNumber: 'Please provide a valid card number 123456!'})
                    }else {
                        console.log(values)
                        dispatch(addPayment(values))
                        handleNext();
                        formikBag.resetForm()
                    }
                }}
            />
        </>
    )
}
export default Form