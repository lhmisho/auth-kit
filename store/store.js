import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducers'
import ThunkMiddleware from 'redux-thunk'
const initState = {
    categories:{},
    subCategories:{},
    services: {},
    locations: {},
    allServiceReducer: {}
}

export function initializeStore (initialState = initState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(ThunkMiddleware))
  )
}
