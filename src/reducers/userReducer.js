import {
    SET_NAME,
    SET_AGE,
} from '../actions/userActions'

const initialState = {
    age: 22,
    name: 'Faiza',
    list: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AGE:
            state = {
                ...state,
                age: action.payload
            }
            break;

        case SET_NAME:
            state = {
                ...state,
                name: action.payload
            }
            break;
    }

    return state
}

