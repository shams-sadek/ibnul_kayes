import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import { userReducer } from './reducers/userReducer'
// import { mathReducer } from './reducers/mathReducer'

const store = createStore(
    combineReducers({
        // mathReducer,
        userReducer
    }),
    {},
    applyMiddleware(logger, thunk, promise())
)

export default store