import Axios from 'axios'
const authClient = Axios.create({
    baseURL: process.env.API_BASE_URL
});



export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'
export const LOGOUT = 'LOGOUT'
export const LOADING = 'LOADING'
export const ERROR = 'ERROR'


const url = ""

export const loading = (isLoading) => ({ type: LOADING, payload: isLoading })
export const catchError = (error) => ({ type: ERROR, payload: error })

export const login = user => dispatch => {
    console.log("got call login")
    dispatch(loading(true));
    authClient.post('/api/consumer/v1/login/', {
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


const init = {
    user: {},
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
        default:
            return state;
    }
};

export default userReducer;