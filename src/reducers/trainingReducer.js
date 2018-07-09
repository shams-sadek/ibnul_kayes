import { CLICK_ME, CHANGE_NAME } from '../actions/trainingActions'

const initialState = {
    name: 'Md. Shams Sadek',
}

export const trainingReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_ME:
            state = {
                ...state,
                name: action.name
            }
            break;
        
        case CHANGE_NAME:
            state = {
                ...state,
                name: action.name
            }
            break;
    }

    return state
}

