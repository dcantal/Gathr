import {
    RECEIVE_ERRORS,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const sessionErrors = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            
            break;
    
        default:
            break;
    }
}