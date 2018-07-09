import { combineReducers } from 'redux'

import {userReducer} from './userReducer'
import {trainingReducer} from './trainingReducer'
import {sabbirReducer} from './sabbirReducer'


const rootReducer = combineReducers({
    userReducer,
    trainingReducer,
    sabbirReducer
})

export default rootReducer