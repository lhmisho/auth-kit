import { combineReducers } from 'redux'
import userReducer from './auth-reducer'
import checkOutReducer from './reducers/checkout-reducer'
const rootReducer = combineReducers({
    user: userReducer,
    checkout: checkOutReducer
})

export default rootReducer;