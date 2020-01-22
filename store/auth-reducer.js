import Axios from 'axios'
const apiClient = Axios.create({
    baseURL: process.env.API_BASE_URL
});

const LOGIN = 'LOGIN';
const SIGNUP = 'SIGNUP';
const LOGOUT = 'LOGOUT';
const LOADING = 'LOADING';
const ERROR = 'ERROR';
const APOINTMENT = 'APOINTMENT';


export const loading = (isLoading) => ({ type: LOADING, payload: isLoading })
export const catchError = (error) => ({ type: ERROR, payload: error })

export const login = user => dispatch => {
    dispatch(loading(true));
    apiClient.post('/api/consumer/v1/login/', {
        username: user.email,
        password: user.password
    })
        .then(({ data }) => {
            dispatch(loading(false))
            dispatch(catchError(''))
            console.log(data);
            localStorage.setItem('auth-token', data.key);
            dispatch({ type: LOGIN, payload: data.user })
        })
        .catch(error => {
            dispatch(loading(false))
            const erroMsg = error.response.data;
            console.log(erroMsg)
            dispatch(catchError(erroMsg))

        })
}

export const signup = user => dispatch => {
    dispatch(loading(true))
    Axios.post(url, user)
        .then(({ data }) => {
            dispatch(loading(false))
            dispatch(catchError(''))
            console.log(data)
        })
        .catch(error => {
            dispatch(loading(false))
            const errorMsg = error.response.data.msg;
            dispatch(catchError(errorMsg))
        })
}

export const logout = () => dispatch => {
    localStorage.removeItem('auth-token');
    dispatch({ type: LOGOUT })
}

export const apointment = (values) => dispatch => {
    dispatch(loading(true))
    apiClient.post(`myURl`, {values})
        .then(({data}) => {
            dispatch(loading(false));
            dispatch(catchError(''))
            dispatch({type: APOINTMENT, payload: data})
        })
        .catch(error => {
            dispatch(loading(false));
            const erroMsg = error.response.data;
            dispatch(catchError(erroMsg));
            dispatch({type: ERROR})
        })
}


const init = {
    user: {},
    apointMent: {},
    isAuthenticated: false,
    isLoading: false,
    error: ''
};

// user reducer 
const userReducer = (state = init, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            };
        case LOGOUT:
            return {
                ...state,
                user: {},
                isAuthenticated: false
            };
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        case APOINTMENT:
            return{
                ...state,
                apointment: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;