import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_GROUP } from '../actions/group_actions';
import { RECEIVE_MEMBERSHIP, REMOVE_MEMBERSHIP } from '../actions/membership_actions';
import merge from 'lodash/merge';

const usersReducer = (state={}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {[action.currentUser.user.id]: action.currentUser.user});
        default:
            return state;
    }
};

export default usersReducer;    