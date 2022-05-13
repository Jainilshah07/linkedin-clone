import { SET_USER } from '../actions/actionType';

const INITIAL_STATE = {
    user: null,
}
const userReducer =  (state = INITIAL_STATE ,action ) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,              //Takes exisiting State 
                user: action.user,     //Adds New user to it 
            }
        default:
            return state;           //if state doesnt change , returns Default State
    }
}

export default userReducer;