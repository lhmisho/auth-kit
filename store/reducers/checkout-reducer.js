import Axios from 'axios'
const apiClient = Axios.create({
    baseURL: process.env.API_BASE_URL
});

const GETDATA = 'GETDATA';
const ADDADDRESS = 'ADDADDRESS';
const ADDPAYMENT = 'ADDPAYMENT';
const SUBMIT = 'SUBMIT';
const ERROR = 'ERROR';
const LOADING = 'LOADING';

export const loading = (isLoading) => ({ type: LOADING, payload: isLoading })
export const catchError = (error) => ({ type: ERROR, payload: error })

export const initData = () => {
    dispatch(loading(true))
}

export const addAddress = (address) => dispatch => {
    console.log(address)
    dispatch({type: ADDADDRESS, payload: address})
}
export const addPayment = (payment) => dispatch => {
    dispatch({type: ADDPAYMENT, payload: payment})
}

const checkout = {
    address: {
        isSaveAddress: false,
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        country: '',
        zipcode: '',
        state: '',
        city: ''
    },
    paymentInfo: {
        isSaveCard: false,
        cardName: '',
        cardNumber: '',
        expDate: '',
        cvv: '',
    }
}

import produce from 'immer'
const checkOutReducer = (state = checkout, action) =>{
    switch (action.type){
        case ADDADDRESS:{
            return produce(state, draft => {
                draft.address = action.payload
            })
        }
        case ADDPAYMENT: {
            return produce(state, draft => {
                draft.paymentInfo = action.payload
            })
        }
        default: return state
    }
}

export default checkOutReducer